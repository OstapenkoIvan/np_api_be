import { Router } from "express";

import middlewares, { Middlewares } from "../../middleware";
import { helpers, Helpers } from "../../helpers";
import { WarehouseController, warehouseController } from "../../controllers";
import { warehouseSchema, WarehouseSchema } from "../../schemas";

export default class WarehouseRoutes {
  public router: Router;

  private middleware: Middlewares = middlewares;

  private helpers: Helpers = helpers;

  private controller: WarehouseController = warehouseController;

  private warehouseSchema: WarehouseSchema = warehouseSchema;

  constructor() {
    this.router = Router();
    this.registerRoutes();
  }

  protected registerRoutes() {
    this.router.get(
      "/",
      this.helpers.controllerWrapper(this.middleware.ifCollectionEmpty),
      this.helpers.controllerWrapper(this.controller.getSelectedWhController)
    );

    this.router.post(
      "/",
      this.middleware.validate(this.warehouseSchema.warehouseInputSchema),
      this.helpers.controllerWrapper(this.controller.getSelectedWhController)
    );
  }
}
