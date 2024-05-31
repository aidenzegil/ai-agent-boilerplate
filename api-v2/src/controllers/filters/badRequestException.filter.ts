import type { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { BadRequestException, Catch } from "@nestjs/common";
import { Response } from "express";
import { AnsiForeground, deep } from "src/util/logging/deepLog";

import { ErrorResponse } from "$controllers/types/response.dto";

@Catch(BadRequestException)
export class BadRequestExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const message = (() => {
      const res = exception.getResponse();
      if (typeof res === "string") return res;
      if (typeof res === "object" && "message" in res)
        return new String(res["message"]).toString();
      return "unknown bad request error";
    })();

    deep.error(exception, AnsiForeground.MAGENTA);

    const resBody: ErrorResponse = {
      error: {
        code: 400,
        message: message,
      },
    };

    response.status(400).json(resBody);
  }
}
