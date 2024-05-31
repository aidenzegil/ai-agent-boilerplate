import serverlessExpress from "@codegenie/serverless-express";
import type { APIGatewayProxyCallbackV2, APIGatewayProxyEventV2, Context, Handler } from "aws-lambda";

import { prepServer } from "$server";

let cachedServer: Handler;

async function bootstrap() {
  if (!cachedServer) {
    const app = await prepServer();

    await app.init();

    const expressApp = app.getHttpAdapter().getInstance();

    cachedServer = serverlessExpress({ app: expressApp });
  }

  return cachedServer;
}

export const handler: Handler = async (event: APIGatewayProxyEventV2, context: Context, callback: APIGatewayProxyCallbackV2) => {
  const server = await bootstrap();
  return server(event, context, callback);
};
