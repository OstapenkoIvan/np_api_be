"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackSchema = exports.TrackSchema = void 0;
var joi_1 = __importDefault(require("joi"));
var TrackSchema = /** @class */ (function () {
    function TrackSchema() {
        this.trackNumberSchema = joi_1.default.object({
            number: joi_1.default.string()
                .length(14)
                .pattern(/[0-9]+/i)
                .required()
                .messages({ message: "Number is required" }),
        });
    }
    return TrackSchema;
}());
exports.TrackSchema = TrackSchema;
exports.trackSchema = new TrackSchema();
//# sourceMappingURL=tnn.schema.js.map