/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { NestMiddleware } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import type { Request, Response } from "express";

import { WithStash } from "$controllers/types/request.dto";
import { UserService } from "$domain/user/user.service";

@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(
    req: WithStash<Request>,
    _res: Response,
    next: () => void
  ): Promise<void> {
    /** Check that authentication has been attached */
    if (req.stash.auth) {
      const user = await this.userService
        .GetUser({
          discriminator: "firebaseId",
          firebaseId: req.stash.auth.firebaseId,
        })
        .catch(() => {
          /** If the user isn't found, set the user to null */
          return null;
        });

      req.stash.user = user;
    }

    next();
  }
}
