"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseController = exports.warehouseController = exports.TrackingController = exports.trackingController = void 0;
var tracking_controller_1 = require("./tracking.controller");
Object.defineProperty(exports, "trackingController", { enumerable: true, get: function () { return __importDefault(tracking_controller_1).default; } });
Object.defineProperty(exports, "TrackingController", { enumerable: true, get: function () { return tracking_controller_1.TrackingController; } });
var warehouse_controller_1 = require("./warehouse.controller");
Object.defineProperty(exports, "warehouseController", { enumerable: true, get: function () { return __importDefault(warehouse_controller_1).default; } });
Object.defineProperty(exports, "WarehouseController", { enumerable: true, get: function () { return warehouse_controller_1.WarehouseController; } });
//# sourceMappingURL=index.js.map