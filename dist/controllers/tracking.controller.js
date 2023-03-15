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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingController = void 0;
require("dotenv/config");
var helpers_1 = require("../helpers");
var services_1 = require("../services");
var TrackingController = /** @class */ (function (_super) {
    __extends(TrackingController, _super);
    function TrackingController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrackingController.prototype.getTrackController = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var data, number, newTrack, _a, Number_1, ScheduledDeliveryDate, ActualDeliveryDate, TrackingUpdateDate, DateCreated, StatusCode, Status, WarehouseRecipient, WarehouseSender, WarehouseRecipientAddress, WarehouseSenderAddress;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        data = req.track;
                        number = req.body.number;
                        console.log("inside ccontroller number", number);
                        if (!!data) return [3 /*break*/, 4];
                        return [4 /*yield*/, TrackingController.getTrack(number)];
                    case 1:
                        newTrack = _b.sent();
                        console.log("inside ccontroller newTrack", newTrack);
                        if (!newTrack.success) return [3 /*break*/, 3];
                        _a = newTrack.data[0], Number_1 = _a.Number, ScheduledDeliveryDate = _a.ScheduledDeliveryDate, ActualDeliveryDate = _a.ActualDeliveryDate, TrackingUpdateDate = _a.TrackingUpdateDate, DateCreated = _a.DateCreated, StatusCode = _a.StatusCode, Status = _a.Status, WarehouseRecipient = _a.WarehouseRecipient, WarehouseSender = _a.WarehouseSender, WarehouseRecipientAddress = _a.WarehouseRecipientAddress, WarehouseSenderAddress = _a.WarehouseSenderAddress;
                        return [4 /*yield*/, TrackingController.addTrack({
                                Number: Number_1,
                                ScheduledDeliveryDate: ScheduledDeliveryDate,
                                ActualDeliveryDate: ActualDeliveryDate,
                                TrackingUpdateDate: TrackingUpdateDate,
                                DateCreated: DateCreated,
                                StatusCode: StatusCode,
                                Status: Status,
                                WarehouseRecipient: WarehouseRecipient,
                                WarehouseSender: WarehouseSender,
                                WarehouseRecipientAddress: WarehouseRecipientAddress,
                                WarehouseSenderAddress: WarehouseSenderAddress,
                            })];
                    case 2:
                        data = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        data = { Status: newTrack.warnings[0] };
                        _b.label = 4;
                    case 4:
                        res.status(200).json({
                            status: "success",
                            code: 200,
                            data: data,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TrackingController.prototype.getAllTracksController = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, TrackingController.getAllTracks()];
                    case 1:
                        data = _a.sent();
                        if (!data) {
                            throw TrackingController.helpers.errorHandler({
                                status: 501,
                                message: "Something went wrong with getting tracks",
                            });
                        }
                        res.status(200).json({
                            status: "success",
                            code: 200,
                            data: data,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TrackingController.helpers = helpers_1.helpers;
    return TrackingController;
}(services_1.TrackingService));
exports.TrackingController = TrackingController;
var trackingController = new TrackingController();
exports.default = trackingController;
//# sourceMappingURL=tracking.controller.js.map