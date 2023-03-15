"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseService = exports.warehouseService = exports.TrackingService = exports.trackingService = void 0;
var tracking_services_1 = require("./tracking.services");
Object.defineProperty(exports, "trackingService", { enumerable: true, get: function () { return __importDefault(tracking_services_1).default; } });
Object.defineProperty(exports, "TrackingService", { enumerable: true, get: function () { return tracking_services_1.TrackingService; } });
var warehouse_serice_1 = require("./warehouse.serice");
Object.defineProperty(exports, "warehouseService", { enumerable: true, get: function () { return __importDefault(warehouse_serice_1).default; } });
Object.defineProperty(exports, "WarehouseService", { enumerable: true, get: function () { return warehouse_serice_1.WarehouseService; } });
//# sourceMappingURL=index.js.map