import { Router } from "express";

import { todoController, TodoController } from "../../controllers";
import middlewares, { Middlewares } from "../../middleware";
import { todoSchema, TodoSchema } from "../../schemas";
import { helpers, Helpers } from "../../helpers";

export default class TodoRoutes {
  public router: Router;

  private controller: TodoController = todoController;

  private middleware: Middlewares = middlewares;

  private helpers: Helpers = helpers;

  private todoSchema: TodoSchema = todoSchema;

  constructor() {
    this.router = Router();
    this.registerRoutes();
  }

  protected registerRoutes() {
    this.router.get(
      "/",
      this.helpers.controllerWrapper(this.middleware.authorize),
      this.helpers.controllerWrapper(this.controller.getAllController)
    );

    // this.router.post(
    //   '/',
    //   this.helpers.controllerWrapper(this.middleware.authorize),
    //   this.middleware.validate(this.todoSchema.editColumnSchema),
    //   this.helpers.controllerWrapper(this.controller.addColumnController)
    // );

    // this.router.post(
    //   '/:columnId',
    //   this.helpers.controllerWrapper(this.middleware.authorize),
    //   this.middleware.validate(this.todoSchema.editTodoSchema),
    //   this.middleware.validateId(),
    //   this.helpers.controllerWrapper(this.controller.addTodoController)
    // );
  }
}
