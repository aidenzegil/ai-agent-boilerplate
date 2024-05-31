import type { ParamsOrError } from "./ApplicationError";
import { ApplicationError } from "./ApplicationError";

export class AuthorizationError extends ApplicationError {
  constructor(data: ParamsOrError, error?: Error | null) {
    // eslint-disable-next-line no-param-reassign
    data.message = data.message || "Authorization Error";

    super(data, error);
    this.name = "AuthorizationError";
    this.code = 403;
    this.public = true;
  }
}
