import ApplicationError, { ParamsOrError } from "./ApplicationError";
/**
 * This error is for unimplemented functions for services that are
 * under construction or don't support an interface method
 */
class NotImplementedError extends ApplicationError {
  constructor(
    data: ParamsOrError = { message: "This method is not implemented" },
    error?: Error | null,
  ) {
    data.message = data.message;

    super(data, error);
    this.name = data.name || "Not Implemented Error";
    this.code = 501;
    this.public = true;
  }
}

export default NotImplementedError;
