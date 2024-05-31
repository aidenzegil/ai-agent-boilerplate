import path = require("path");
import { Database } from "./components/database/database";
import { Code, Function, Runtime } from "aws-cdk-lib/aws-lambda";
import { Duration, Stack, StackProps } from "aws-cdk-lib";
import { Asset } from "aws-cdk-lib/aws-s3-assets";
import { LambdaRestApi } from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";

function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Environment variable ${name} is not set`);
  }
  return value;
}

export class InfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const database = new Database(this, "main-db", {
      stackName: props?.stackName || id,
    });

    // LAMBDA
    const dbParams = database.getConnectionParams();

    const handlerName = "main";

    // https://docs.aws.amazon.com/cdk/api/latest/docs/aws-s3-assets-readme.html
    const zipFolder = new Asset(
      this,
      props?.stackName + "lambda-asset-" + handlerName,
      {
        path: path.join(__dirname, "../../dist"),
      }
    );

    const lambdaFn = new Function(this, "-servicefn", {
      code: Code.fromBucket(zipFolder.bucket, zipFolder.s3ObjectKey),
      timeout: Duration.seconds(300),
      runtime: Runtime.NODEJS_20_X,
      handler: `handlers/${handlerName}.handler`,
      /**
       * Add environment variables to the Lambda function
       * TODO: Load env variables from .env file
       */
      environment: {
        STACK: props?.stackName || id,
        /** 
         * ! Untested ! 
         * This should take care of the env variables
         * we just need a key+vault pair for each env
         */
        ENV: getEnvVar("ENV"), // This determines which key to use
        DOTENV_KEY_LOCAL: getEnvVar("DOTENV_KEY_LOCAL"),
        DOTENV_VAULT_LOCAL: getEnvVar("DOTENV_VAULT_LOCAL"),
        DB_HOST: dbParams.host,
        DB_PORT: dbParams.port,
        DB_NAME: dbParams.database,
        DB_USER: dbParams.user,
        DB_PASSWORD: dbParams.password,
      },
    });

    // API GATEWAY
    new LambdaRestApi(
      // @ts-ignore - this expects Construct not cdk.Construct :thinking:
      this,
      "-apigateway",
      {
        handler: lambdaFn,
      }
    );
  }
}
