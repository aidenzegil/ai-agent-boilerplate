import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as rds from "aws-cdk-lib/aws-rds";
import * as secretsmanager from "aws-cdk-lib/aws-secretsmanager";
import { Construct } from "constructs";

const isProd = (stackName: string) => {
  if (stackName === "prod") return true;
  return false;
};

export class Database extends Construct {
  public readonly secret: secretsmanager.Secret;
  public readonly instance: rds.DatabaseInstance;
  public readonly accessSecurityGroup: ec2.SecurityGroup;

  constructor(scope: Construct, id: string, options: DatabaseOptions) {
    super(scope, id);

    this.secret = new secretsmanager.Secret(this, "secret", {
      secretName: `@${options.stackName}/infra/${id}/credentials`,
      generateSecretString: {
        secretStringTemplate: '{"username": "postgres", "dbname": "db"}',
        excludePunctuation: true,
        includeSpace: false,
        generateStringKey: "password",
      },
    });

    const vpc = new ec2.Vpc(this, "db-vpc", {
      maxAzs: 2,
      natGateways: 1,
    });

    const securityGroup = new ec2.SecurityGroup(this, "db-sg", {
      vpc,
    });

    /**
     * Allow all inbound connections
     * TODO: prod flag
     */
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.allTraffic());

    const subnetType: ec2.SubnetType = isProd(options.stackName)
      ? ec2.SubnetType.PRIVATE_ISOLATED
      : ec2.SubnetType.PUBLIC;

    this.instance = new rds.DatabaseInstance(this, "instance", {
      databaseName: "tankdb",
      credentials: rds.Credentials.fromSecret(this.secret),
      engine: rds.DatabaseInstanceEngine.postgres({
        version: rds.PostgresEngineVersion.VER_16_1,
      }),
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.BURSTABLE4_GRAVITON,
        ec2.InstanceSize.MICRO
      ),
      vpc,
      vpcSubnets: vpc.selectSubnets({
        /**
         * TODO: Jumpserver access for prod stack
         */
        subnetType: subnetType,
      }),
      securityGroups: [securityGroup],
    });
  }

  public getConnectionUrl(): string {
    const u = this._get("username");
    const p = this._get("password");
    const port = this._get("port");
    const host = this._get("host");
    const dbname = this._get("dbname");
    return `postgresql://${u}:${p}@${host}:${port}/${dbname}?connection_limit=1&pool_timeout=30`; // lowering connection limit and increasing timeout as a short-term fix
  }

  public getConnectionParams(): {
    host: string;
    port: string;
    database: string;
    user: string;
    password: string;
  } {
    const port = this.instance.dbInstanceEndpointPort;
    const host = this.instance.dbInstanceEndpointAddress;
    const dbname = this._get("dbname");
    return {
      host,
      port,
      database: dbname,
      user: this._get("username"),
      password: this._get("password"),
    };
  }

  private _get(ref: string): string {
    if (ref === "host") return this.instance.dbInstanceEndpointAddress;
    if (ref === "port") return this.instance.dbInstanceEndpointPort.toString();

    return this.secret.secretValueFromJson(ref).unsafeUnwrap().toString();
  }
}

export interface DatabaseOptions {
  stackName: string;
}
