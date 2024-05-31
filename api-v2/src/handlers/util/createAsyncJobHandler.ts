import { metricScope } from "aws-embedded-metrics";
import type { APIGatewayProxyEvent, Context, Handler } from "aws-lambda";

import { environment } from "$util/environment";

export type LambdaFunction = <Event extends APIGatewayProxyEvent>(
  event: Event,
  context: Context
) => Promise<void>;

export const createAsyncJobLambdaHandler = (fn: LambdaFunction): Handler => {
  if (environment.isLocal()) {
    return fn;
  }
  return metricScope(
    (metrics) => async (e: APIGatewayProxyEvent, ctx: Context) => {
      metrics.putDimensions({ Service: "async-job-handler" });
      metrics.putDimensions({ Stack: environment.stack });
      console.log("Initializing logger with ID:", ctx.awsRequestId);
      metrics.setProperty("RequestId", ctx.awsRequestId);

      await fn(e, ctx);
    }
  );
};
