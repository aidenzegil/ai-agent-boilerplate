export type SuccessResponse<T> = {
  data: T;
};

export type ErrorResponse = {
  error: {
    code: number;
    message: string;
  };
};

export type ApiResponse<T> = Promise<ErrorResponse | SuccessResponse<T>>;
