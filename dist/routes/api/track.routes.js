"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../../controllers");
var middleware_1 = __importDefault(require("../../middleware"));
var schemas_1 = require("../../schemas");
var helpers_1 = require("../../helpers");
var TodoRoutes = /** @class */ (function () {
    function TodoRoutes() {
        this.controller = controllers_1.trackingController;
        this.middleware = middleware_1.default;
        this.helpers = helpers_1.helpers;
        this.trackSchema = schemas_1.trackSchema;
        this.router = (0, express_1.Router)();
        this.registerRoutes();
    }
    TodoRoutes.prototype.registerRoutes = function () {
        this.router.get("/", this.helpers.controllerWrapper(this.controller.getAllTracksController));
        this.router.post("/", this.middleware.validate(this.trackSchema.trackNumberSchema), this.helpers.controllerWrapper(this.middleware.checkExisting), this.helpers.controllerWrapper(this.controller.getTrackController));
    };
    return TodoRoutes;
}());
exports.default = TodoRoutes;
//# sourceMappingURL=track.routes.js.map