import {
  AuthenticatedRequest,
  attachAuthenticatedUser,
} from "#util/authenticate";
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Response } from "express";

@Injectable()
export class PreauthMiddleware implements NestMiddleware {
  async use(
    req: AuthenticatedRequest,
    res: Response<any, Record<string, any>>,
    next: Function,
  ) {
    await attachAuthenticatedUser(req, res, async () => next());
  }
}
