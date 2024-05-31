import type { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { Catch } from "@nestjs/common";
import { Response } from "express";
import { AnsiForeground, deep } from "src/util/logging/deepLog";

import { ApplicationError } from "$common/errors/ApplicationError";
import { ErrorResponse } from "$controllers/types/response.dto";

@Catch(ApplicationError)
export class ApplicationErrorFilter implements ExceptionFilter {
  catch(exception: ApplicationError, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    deep.error(exception, AnsiForeground.MAGENTA);

    const resBody: ErrorResponse = {
      error: {
        code: exception.code,
        message: exception.message,
      },
    };

    response.status(exception.code).json(resBody);
  }
}
