import "dotenv/config";
import { Request, Response, NextFunction, RequestHandler } from "express";
import Joi from "joi";

import { helpers, Helpers } from "../helpers";
import { Track, Warehose } from "../models";
import { ITrackNumber, ITrack, IWarehouseInputs } from "../types";
import { WarehouseService, warehouseService } from "./../services";

export class Middlewares {
  private static helpers: Helpers = helpers;

  async ifCollectionEmpty(req: Request, res: Response, next: NextFunction) {
    const count = await WarehouseService.countItems();
    console.log("middle count", count);

    if (!count) {
      await WarehouseService.getAllWarehouses();
    }

    next();
  }

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
