import { Router } from "express";

import middlewares, { Middlewares } from "../../middleware";
import { helpers, Helpers } from "../../helpers";
import { trackingController, TrackingController } from "../../controllers";
import { trackSchema, TrackSchema } from "../../schemas";

export default class TrackingRoutes {
  public router: Router;

  private middleware: Middlewares = middlewares;

  private helpers: Helpers = helpers;

  private controller: TrackingController = trackingController;

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
