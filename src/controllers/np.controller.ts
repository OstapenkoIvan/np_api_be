import "dotenv/config";
import { Request, Response } from "express";

import { UserService } from "../services";
import { IUser, IRegister, ILogin } from "../types/user.type";
import { helpers, Helpers } from "../helpers";

const { JWT_SECRET, JWT_EXPIRATION } = process.env;

export class UserController extends UserService {
  private static helpers: Helpers = helpers;

  async registerController(req: Request, res: Response) {
    const { name, password, email } = req.body as IRegister;

    const hashUserPassword = await bcrypt.hash(password, 10);

    const newUser: IUser = await UserController.createUser({
      name,
      email,
      password: hashUserPassword,
    });

    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        name: newUser.name,
        email: newUser.email,
        theme: newUser.theme,
      },
    });
  }

  async loginController(req: Request, res: Response) {
    const { password } = req.body as ILogin;
    const user = req.user as IUser;

    if (!user) {
      throw UserController.helpers.errorHandler({
        status: 401,
        message: "Email or password is wrong",
      });
    }

    const validUser = await bcrypt.compare(password, user.password);

    if (!validUser) {
      throw UserController.helpers.errorHandler({
        status: 401,
        message: "Email or password is wrong",
      });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET as Secret, {
      expiresIn: JWT_EXPIRATION,
    });

    if (!token) {
      throw UserController.helpers.errorHandler({
        status: 500,
        message: "Could not create token, try again.",
      });
    }

    await UserController.loginUser(user._id, { token });

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        token,
        user: {
          name: user.name,
          email: user.email,
          theme: user.theme,
        },
      },
    });
  }

  getCurrentController(req: Request, res: Response) {
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        user: {
          email: req.user?.email,
          name: req.user?.name,
          theme: req.user?.theme,
        },
      },
    });
  }

  async logoutController(req: Request, res: Response) {
    const id = req.user?._id;

    if (!id) {
      throw UserController.helpers.errorHandler({
        status: 401,
        message: "Id is missing",
      });
    }

    const response = await UserController.logoutUser(id);

    if (!response) {
      throw UserController.helpers.errorHandler({
        status: 401,
        message: "Not authorized",
      });
    }

    res.status(204).send({
      status: "success",
      code: 204,
      data: {
        message: response,
      },
    });
  }
}

const userController = new UserController();
export default userController;

// TODO add controllers here
