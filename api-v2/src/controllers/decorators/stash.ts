
import type { ExecutionContext } from "@nestjs/common";
import { createParamDecorator } from "@nestjs/common";

import { AuthenticationError } from "$common/errors/AuthenticationError";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Stash = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    if("stash" in request) return request.stash;

    throw new AuthenticationError({ message: "request is missing authentication data" });
  }
);
