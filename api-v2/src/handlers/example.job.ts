import type { APIGatewayProxyEvent, Context } from "aws-lambda";

import type { LambdaFunction } from "$handlers/util/createAsyncJobHandler";
import { createAsyncJobLambdaHandler } from "$handlers/util/createAsyncJobHandler";
import { deep } from "$util/logging/deepLog";

const exampleJob: LambdaFunction = async (
  event: APIGatewayProxyEvent,
  _context: Context
): Promise<void> => {
  deep.log("example job started with event:");
  deep.log(event);
};

export const handler = createAsyncJobLambdaHandler(exampleJob);
