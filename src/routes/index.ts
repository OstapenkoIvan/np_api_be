import { Application, ErrorRequestHandler, RequestHandler } from "express";

import TrackRoutes from "./api/tracking.routes";
// import WarehouseRoutes from "./api/warehouse.routes";

class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.use("/api/tracking", new TrackRoutes().router);
    // this.app.use("/api/warehouses", new WarehouseRoutes().router);

    this.app.use(((req, res) => {
      res.status(404).send({
        status: "error",
        code: 404,
        message: "Use api on routes: /api/tracking || /api/warehouses",
      });
    }) as RequestHandler);

    this.app.use(((err, req, res, next) => {
      res.status(err.status || 501).send({
        status: "error",
        code: err.status || 501,
        message: err.message || "unknown error",
      });
    }) as ErrorRequestHandler);
  }
}

export default AppRouter;
