import type { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { Catch } from "@nestjs/common";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Request, Response } from "express";
import { isProduction } from "src/util/environment";
import { AnsiForeground, deep } from "src/util/logging/deepLog";

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionsFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    deep.error(exception, AnsiForeground.YELLOW);

    const json = JSON.stringify(exception, null, 2);

    const prismaErr = (() => {
      switch (exception.code) {
        case "P2002":
          return {
            code: 400,
            message: "Unique constraint failed on the database.",
          };
        default:
          return { message: "Unknown prisma error occurred." };
      }
    })();

    const statusCode = prismaErr.code || 500;
    const responseBody = {
      error: isProduction()
        ? { message: "Internal Server Error" }
        : JSON.parse(json),
      message: prismaErr.message,
      path: request.url,
      statusCode: statusCode,
      timestamp: new Date().toISOString(),
    };

    response.status(statusCode).json(responseBody);
  }
}
