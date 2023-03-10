"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var warehouseSchema = new mongoose_1.Schema({
    Number: {
        type: Number,
        required: [true, "Number cant be empty"],
    },
    Description: {
        type: String,
        required: [true, "Description cant be empty"],
    },
    ShortAddress: {
        type: String,
        required: [true, "ShortAddress cant be empty"],
    },
    CityDescription: {
        type: String,
        required: [true, "CityDescription cant be empty"],
    },
    SettlementAreaDescription: {
        type: String,
        required: [true, "SettlementAreaDescription cant be empty"],
    },
}, { timestamps: true });
var warehousesSchema = new mongoose_1.Schema({
    data: {
        type: [warehouseSchema],
    },
}, {
    versionKey: false,
    timestamps: true,
});
var Warehouse = (0, mongoose_1.model)("warehouses", warehousesSchema);
exports.default = Warehouse;
//# sourceMappingURL=wh.model.js.map