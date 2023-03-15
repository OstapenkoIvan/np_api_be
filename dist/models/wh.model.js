"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var warehouseSchema = new mongoose_1.Schema({
    Number: {
        type: Number,
    },
    Description: {
        type: String,
    },
    ShortAddress: {
        type: String,
    },
    CityDescription: {
        type: String,
    },
    SettlementAreaDescription: {
        type: String,
    },
}, { versionKey: false, timestamps: true });
var Warehouse = (0, mongoose_1.model)("warehouses", warehouseSchema);
exports.default = Warehouse;
//# sourceMappingURL=wh.model.js.map