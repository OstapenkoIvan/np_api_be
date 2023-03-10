"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoSchema = exports.TodoSchema = void 0;
var joi_1 = __importDefault(require("joi"));
var TodoSchema = /** @class */ (function () {
    function TodoSchema() {
        this.editColumnSchema = joi_1.default.object({
            desc: joi_1.default.string()
                .required()
                .messages({ message: "Description is required" }),
        });
    }
    return TodoSchema;
}());
exports.TodoSchema = TodoSchema;
exports.todoSchema = new TodoSchema();
// TODO add schema here
//# sourceMappingURL=tnn.schema.js.map