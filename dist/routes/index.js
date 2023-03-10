"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var track_routes_1 = __importDefault(require("./api/track.routes"));
// import WarehouseRoutes from "./api/warehouse.routes";
var AppRouter = /** @class */ (function () {
    function AppRouter(app) {
        this.app = app;
    }
    AppRouter.prototype.init = function () {
        this.app.use("/api/tracking", new track_routes_1.default().router);
        // this.app.use("/api/warehouses", new WarehouseRoutes().router);
        this.app.use((function (req, res) {
            res.status(404).json({
                status: "error",
                code: 404,
                message: "Use api on routes: /api/todos || /api/user",
            });
        }));
        this.app.use((function (err, req, res) {
            res.status(err.status || 501).json({
                status: "fail",
                code: err.status || 501,
                message: err.message || "unknown error",
            });
        }));
    };
    return AppRouter;
}());
exports.default = AppRouter;
//# sourceMappingURL=index.js.map