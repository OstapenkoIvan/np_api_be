export interface IResponseError extends Error {
  status?: number;
}

export interface IErrorInputs {
  status: number;
  message: string;
}
