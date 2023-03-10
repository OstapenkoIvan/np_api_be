"use strict";
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
exports.Middlewares = void 0;
require("dotenv/config");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var mongoose_1 = require("mongoose");
var helpers_1 = require("../helpers");
var models_1 = require("../models");
var JWT_SECRET = process.env.JWT_SECRET;
var Middlewares = /** @class */ (function () {
    function Middlewares() {
    }
    Middlewares.prototype.authorize = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, bearer, token, id, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        authorization = req.headers.authorization;
                        if (!authorization) {
                            throw Middlewares.helpers.errorHandler({
                                status: 401,
                                message: "No token provided",
                            });
                        }
                        _a = authorization.split(" "), bearer = _a[0], token = _a[1];
                        if (bearer !== "Bearer") {
                            throw Middlewares.helpers.errorHandler({
                                status: 401,
                                message: "Not authorized",
                            });
                        }
                        id = jsonwebtoken_1.default.verify(token, JWT_SECRET).id;
                        return [4 /*yield*/, models_1.User.findById(id)];
                    case 1:
                        user = (_b.sent());
                        if (!id || !user || user.token !== token) {
                            throw Middlewares.helpers.errorHandler({
                                status: 401,
                                message: "Not authorized",
                            });
                        }
                        req.user = user;
                        next();
                        return [2 /*return*/];
                }
            });
        });
    };
    Middlewares.prototype.validNewUser = function () {
        var _this = this;
        var func = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var _a, name, email, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, email = _a.email;
                        return [4 /*yield*/, models_1.User.findOne({ $or: [{ email: email }, { name: name }] })];
                    case 1:
                        user = _b.sent();
                        if (user) {
                            throw Middlewares.helpers.errorHandler({
                                status: 409,
                                message: "User already exist",
                            });
                        }
                        next();
                        return [2 /*return*/];
                }
            });
        }); };
        return func;
    };
    Middlewares.prototype.validExistUser = function () {
        var _this = this;
        var func = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var data, emailReg, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = req.body.data;
                        emailReg = /\S+@\S+\.\S+/;
                        if (!emailReg.test(data)) return [3 /*break*/, 2];
                        return [4 /*yield*/, models_1.User.findOne({ email: data })];
                    case 1:
                        user = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, models_1.User.findOne({ name: data })];
                    case 3:
                        user = _a.sent();
                        _a.label = 4;
                    case 4:
                        if (!user) {
                            throw Middlewares.helpers.errorHandler({
                                status: 401,
                                message: "Email or password is wrong",
                            });
                        }
                        req.user = user;
                        next();
                        return [2 /*return*/];
                }
            });
        }); };
        return func;
    };
    Middlewares.prototype.validate = function (schema) {
        var func = function (req, res, next) {
            var error = schema.validate(req.body).error;
            if (error)
                throw Middlewares.helpers.errorHandler({
                    status: 400,
                    message: error.message,
                });
            next();
        };
        return func;
    };
    Middlewares.prototype.validateId = function () {
        var func = function (req, res, next) {
            if (req.params.columnId && !(0, mongoose_1.isValidObjectId)(req.params.columnId)) {
                throw Middlewares.helpers.errorHandler({
                    status: 422,
                    message: "Not valid Id, please provide correct contact id",
                });
            }
            if (req.params.todoId && !(0, mongoose_1.isValidObjectId)(req.params.todoId)) {
                throw Middlewares.helpers.errorHandler({
                    status: 422,
                    message: "Not valid Id, please provide correct contact id",
                });
            }
            next();
        };
        return func;
    };
    Middlewares.helpers = helpers_1.helpers;
    return Middlewares;
}());
exports.Middlewares = Middlewares;
var middlewares = new Middlewares();
exports.default = middlewares;
// TODO add tnn validation middleware
//# sourceMappingURL=index.js.map