"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var middleware_1 = __importDefault(require("../../middleware"));
var helpers_1 = require("../../helpers");
var controllers_1 = require("../../controllers");
var schemas_1 = require("../../schemas");
var WarehouseRoutes = /** @class */ (function () {
    function WarehouseRoutes() {
        this.middleware = middleware_1.default;
        this.helpers = helpers_1.helpers;
        this.controller = controllers_1.warehouseController;
        this.warehouseSchema = schemas_1.warehouseSchema;
        this.router = (0, express_1.Router)();
        this.registerRoutes();
    }
    WarehouseRoutes.prototype.registerRoutes = function () {
        this.router.get("/", this.helpers.controllerWrapper(this.middleware.ifCollectionEmpty), this.helpers.controllerWrapper(this.controller.getSelectedWhController));
        this.router.post("/", this.middleware.validate(this.warehouseSchema.warehouseInputSchema), this.helpers.controllerWrapper(this.middleware.ifCollectionEmpty), this.helpers.controllerWrapper(this.controller.getSelectedWhController));
    };
    return WarehouseRoutes;
}());
exports.default = WarehouseRoutes;
//# sourceMappingURL=warehouse.routes.js.map