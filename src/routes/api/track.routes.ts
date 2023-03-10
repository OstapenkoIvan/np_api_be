import { Router } from "express";

import { trackingController, TrackingController } from "../../controllers";
import middlewares, { Middlewares } from "../../middleware";
import { trackSchema, TrackSchema } from "../../schemas";
import { helpers, Helpers } from "../../helpers";

export default class TodoRoutes {
  public router: Router;

  private controller: TrackingController = trackingController;

  private middleware: Middlewares = middlewares;

  private helpers: Helpers = helpers;

  private trackSchema: TrackSchema = trackSchema;

  constructor() {
    this.router = Router();
    this.registerRoutes();
  }

  protected registerRoutes() {
    this.router.get(
      "/",
      this.helpers.controllerWrapper(this.controller.getAllTracksController)
    );

    this.router.post(
      "/",
      this.middleware.validate(this.trackSchema.trackNumberSchema),
      this.helpers.controllerWrapper(this.middleware.checkExisting),
      this.helpers.controllerWrapper(this.controller.getTrackController)
    );
  }
}
