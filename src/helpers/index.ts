import { RequestHandler } from "express";
import { Controller, IResponseError, IErrorInputs } from "../types";

export class Helpers {
  errorHandler({ status, message }: IErrorInputs) {
    const error: IResponseError = new Error(message);

    error.status = status;

    return error;
  }

  controllerWrapper(controller: Controller) {
    const func: RequestHandler = async (req, res, next) => {
      try {
        await controller(req, res, next);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log("ControllerHandler Error", error);
        next(error);
      }
    };
    return func;
  }
}

export const helpers = new Helpers();

// TODO add wrapper here
