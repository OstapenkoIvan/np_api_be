"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
require("dotenv/config");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var services_1 = require("../services");
var helpers_1 = require("../helpers");
var _a = process.env, JWT_SECRET = _a.JWT_SECRET, JWT_EXPIRATION = _a.JWT_EXPIRATION;
var UserController = /** @class */ (function (_super) {
    __extends(UserController, _super);
    function UserController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserController.prototype.registerController = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, password, email, hashUserPassword, newUser;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, password = _a.password, email = _a.email;
                        return [4 /*yield*/, bcryptjs_1.default.hash(password, 10)];
                    case 1:
                        hashUserPassword = _b.sent();
                        return [4 /*yield*/, UserController.createUser({
                                name: name,
                                email: email,
                                password: hashUserPassword,
                            })];
                    case 2:
                        newUser = _b.sent();
                        res.status(201).json({
                            status: "success",
                            code: 201,
                            data: {
                                name: newUser.name,
                                email: newUser.email,
                                theme: newUser.theme,
                            },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.loginController = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var password, user, validUser, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        password = req.body.password;
                        user = req.user;
                        if (!user) {
                            throw UserController.helpers.errorHandler({
                                status: 401,
                                message: "Email or password is wrong",
                            });
                        }
                        return [4 /*yield*/, bcryptjs_1.default.compare(password, user.password)];
                    case 1:
                        validUser = _a.sent();
                        if (!validUser) {
                            throw UserController.helpers.errorHandler({
                                status: 401,
                                message: "Email or password is wrong",
                            });
                        }
                        token = jsonwebtoken_1.default.sign({ id: user._id }, JWT_SECRET, {
                            expiresIn: JWT_EXPIRATION,
                        });
                        if (!token) {
                            throw UserController.helpers.errorHandler({
                                status: 500,
                                message: "Could not create token, try again.",
                            });
                        }
                        return [4 /*yield*/, UserController.loginUser(user._id, { token: token })];
                    case 2:
                        _a.sent();
                        res.status(200).json({
                            status: "success",
                            code: 200,
                            data: {
                                token: token,
                                user: {
                                    name: user.name,
                                    email: user.email,
                                    theme: user.theme,
                                },
                            },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.getCurrentController = function (req, res) {
        var _a, _b, _c;
        res.status(200).json({
            status: "success",
            code: 200,
            data: {
                user: {
                    email: (_a = req.user) === null || _a === void 0 ? void 0 : _a.email,
                    name: (_b = req.user) === null || _b === void 0 ? void 0 : _b.name,
                    theme: (_c = req.user) === null || _c === void 0 ? void 0 : _c.theme,
                },
            },
        });
    };
    UserController.prototype.logoutController = function (req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var id, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = (_a = req.user) === null || _a === void 0 ? void 0 : _a._id;
                        if (!id) {
                            throw UserController.helpers.errorHandler({
                                status: 401,
                                message: "Id is missing",
                            });
                        }
                        return [4 /*yield*/, UserController.logoutUser(id)];
                    case 1:
                        response = _b.sent();
                        if (!response) {
                            throw UserController.helpers.errorHandler({
                                status: 401,
                                message: "Not authorized",
                            });
                        }
                        res.status(204).send({
                            status: "success",
                            code: 204,
                            data: {
                                message: response,
                            },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.helpers = helpers_1.helpers;
    return UserController;
}(services_1.UserService));
exports.UserController = UserController;
var userController = new UserController();
exports.default = userController;
// TODO add controllers here
//# sourceMappingURL=np.controller.js.map