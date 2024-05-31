import type { NestMiddleware } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import type { Request, Response } from "express";

import { WithStash } from "$controllers/types/request.dto";
import { AuthenticationService } from "$external/authentication/authentication.service";

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthenticationService) {}

  async use(req: WithStash<Request>, _res: Response, next: () => void): Promise<void> {
    /** Get the auth token from the request */
    const token = this.authService.getAuthToken(req);

    if (token) {
      /** Decode the token into an authUser */
      const authUser = await this.authService
        .decodeAuthToken(token)
        .catch(() => {
          /** Set auth to null if there is an error decoding the token */
          return null;
        });
      /** Attach the firebaseUser to the request */
      req.stash.auth = authUser;
    } else {
      /** Set auth to null if no token is found */
      req.stash.auth = null;
    }

    next();
  }
}
