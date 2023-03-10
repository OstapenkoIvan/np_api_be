import "dotenv/config";
import { Request, Response, NextFunction, RequestHandler } from "express";
import Joi from "joi";
import { isValidObjectId } from "mongoose";

import { helpers, Helpers } from "../helpers";
import { User } from "../models";
import { IUser, IRegister, ILogin } from "../types/user.type";

export class Middlewares {
  private static helpers: Helpers = helpers;

  validNewUser() {
    const func: RequestHandler = async (req, res, next) => {
      const { name, email } = req.body as IRegister;

      const user: IUser = await User.findOne({ $or: [{ email }, { name }] });

      if (user) {
        throw Middlewares.helpers.errorHandler({
          status: 409,
          message: "User already exist",
        });
      }

      next();
    };
    return func;
  }

  validExistUser() {
    const func: RequestHandler = async (req, res, next) => {
      const { data } = req.body as ILogin;

      const emailReg = /\S+@\S+\.\S+/;

      let user: IUser;

      if (emailReg.test(data)) {
        user = await User.findOne({ email: data });
      } else {
        user = await User.findOne({ name: data });
      }

      if (!user) {
        throw Middlewares.helpers.errorHandler({
          status: 401,
          message: "Email or password is wrong",
        });
      }

      req.user = user;

      next();
    };
    return func;
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

// TODO add tnn validation middleware
