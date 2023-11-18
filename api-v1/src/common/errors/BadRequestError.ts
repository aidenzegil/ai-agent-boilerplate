import ApplicationError, { ParamsOrError } from "./ApplicationError";

class BadRequestError extends ApplicationError {
  constructor(data: ParamsOrError, error?: Error | null) {
    // eslint-disable-next-line no-param-reassign
    data.message = data.message || "Bad Request Error";

    super(data, error);
    this.name = data.name || "Bad Request Error";
    this.code = 400;
    this.public = true;
  }
}

export default BadRequestError;
