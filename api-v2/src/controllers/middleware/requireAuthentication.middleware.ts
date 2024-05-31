import type { NestMiddleware } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import type { Request, Response } from "express";

import { AuthenticationError } from "$common/errors/AuthenticationError";
import { WithStash } from "$controllers/types/request.dto";

@Injectable()
export class RequireAuthentication implements NestMiddleware {
  use = requireAuthentication;
}

export function requireAuthentication(
  req: WithStash<Request>,
  _res: Response,
  next: () => void
): void {
  const authUser = req.stash.auth;

  /** Throw an error if auth is null */
  if (!authUser) {
    throw new AuthenticationError({
      message: "user not authenticated",
    });
  }

  /** continue if firebaseUser is attached */
  next();
}
