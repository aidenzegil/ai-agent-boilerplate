import ApplicationError, { ParamsOrError } from "./ApplicationError";

class InvalidContentError extends ApplicationError {
  constructor(data: ParamsOrError, error?: Error | null) {
    // eslint-disable-next-line no-param-reassign
    data.message = data.message || "Unprocessable Content Error";

    super(data, error);
    this.name = data.name || "Unprocessable Content Error";
    this.code = 422;
    this.public = true;
  }
}

export default InvalidContentError;
