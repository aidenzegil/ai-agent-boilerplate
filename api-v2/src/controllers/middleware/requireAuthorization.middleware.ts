import type { NestMiddleware } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import type { Request, Response } from "express";

import { AuthorizationError } from "$common/errors/AuthorizationError";
import { WithStash } from "$controllers/types/request.dto";

@Injectable()
export class RequireAuthorization implements NestMiddleware {
  use = requireAuthorization;
}

export function requireAuthorization(
  req: WithStash<Request>,
  _res: Response,
  next: () => void
): void {
  const user = req.stash.user;

  const isAuthorized = user?.id && user.id === req.params.userId;
  /** Throw an error if user is not authorized */
  if (!isAuthorized) {
    console.warn(`User ${user?.id} is not authorized to access ${req.path}`);
    throw new AuthorizationError({
      message: "user not authorized",
    });
  }

  next();
}
