"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        minLength: 1,
        maxLength: 40,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    theme: {
        type: String,
        default: null,
    },
    token: {
        type: String,
        default: null,
    },
}, {
    versionKey: false,
    timestamps: true,
});
var User = (0, mongoose_1.model)("users", userSchema);
exports.default = User;
// TODO create request model
//# sourceMappingURL=np.model.js.map