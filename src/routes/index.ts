import { Application, ErrorRequestHandler, RequestHandler } from "express";

import TrackRoutes from "./api/track.routes";
import WarehouseRoutes from "./api/warehouse.routes";

class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.use("/api/tracking", new TrackRoutes().router);
    this.app.use("/api/warehouses", new WarehouseRoutes().router);

    this.app.use(((req, res) => {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "Use api on routes: /api/todos || /api/user",
      });
    }) as RequestHandler);

    this.app.use(((err, req, res) => {
      res.status(err.status || 501).json({
        status: "fail",
        code: err.status || 501,
        message: err.message || "unknown error",
      });
    }) as ErrorRequestHandler);
  }
}

export default AppRouter;

// TODO import routes, create main route
