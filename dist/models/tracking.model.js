"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var trackSchema = new mongoose_1.Schema({
    Number: {
        type: Number,
        min: 10000000000000,
        max: 99999999999999,
        required: [true, "Track cant be empty"],
    },
    ScheduledDeliveryDate: {
        type: Date,
    },
    ActualDeliveryDate: {
        type: Date,
    },
    TrackingUpdateDate: {
        type: Date,
    },
    DateCreated: {
        type: Date,
    },
    StatusCode: {
        type: Number,
    },
    Status: {
        type: String,
    },
    WarehouseRecipient: {
        type: String,
    },
    WarehouseSender: {
        type: String,
    },
    WarehouseRecipientAddress: {
        type: String,
    },
    WarehouseSenderAddress: {
        type: String,
    },
}, { timestamps: true });
var Track = (0, mongoose_1.model)("tracks", trackSchema);
exports.default = Track;
//# sourceMappingURL=tracking.model.js.map