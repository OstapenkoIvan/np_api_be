import "dotenv/config";
import { Request, Response, NextFunction, RequestHandler } from "express";
import Joi from "joi";

import { helpers, Helpers } from "../helpers";
import { Track } from "../models";
import { ITrackNumber, ITrack } from "../types";

export class Middlewares {
  private static helpers: Helpers = helpers;

  async checkExisting(req: Request, res: Response, next: NextFunction) {
    const { number } = req.body as ITrackNumber;

    const track: ITrack | null = await Track.findOne({
      Number: number,
    });

    if (track) {
      req.track = track;
    }

    next();
  }

  validate(schema: Joi.ObjectSchema<any>) {
    const func: RequestHandler = (req, res, next) => {
      const { error } = schema.validate(req.body);

      if (error)
        throw Middlewares.helpers.errorHandler({
          status: 400,
          message: error.message,
        });

      next();
    };
    return func;
  }
}

const middlewares = new Middlewares();
export default middlewares;
