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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
var models_1 = require("../models");
var TodoService = /** @class */ (function () {
    function TodoService() {
    }
    TodoService.getAllTodos = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var allTodos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.Column.find({
                            author: id,
                        }, "-author")];
                    case 1:
                        allTodos = _a.sent();
                        return [2 /*return*/, allTodos];
                }
            });
        });
    };
    TodoService.addColumn = function (desc, id) {
        return __awaiter(this, void 0, void 0, function () {
            var newColumn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.Column.create({
                            desc: desc,
                            todos: [],
                            author: id,
                        })];
                    case 1:
                        newColumn = _a.sent();
                        return [2 /*return*/, newColumn];
                }
            });
        });
    };
    TodoService.addTodo = function (columnId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var newTodo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.Column.findByIdAndUpdate(columnId, {
                            $push: {
                                todos: {
                                    data: data,
                                },
                            },
                        }, {
                            new: true,
                        })];
                    case 1:
                        newTodo = _a.sent();
                        return [2 /*return*/, newTodo];
                }
            });
        });
    };
    TodoService.updateColumn = function (columnId, desc) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.Column.findByIdAndUpdate(columnId, { desc: desc }, {
                            new: true,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    TodoService.updateTodo = function (todoId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.Column.findOneAndUpdate({ "todos._id": todoId }, { $set: { "todos.$.data": data } }, {
                            new: true,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    TodoService.updateArrayTodo = function (columnId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.Column.findByIdAndUpdate(columnId, { $set: { todos: data } }, {
                            new: true,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    TodoService.removeColumn = function (columnId) {
        return __awaiter(this, void 0, void 0, function () {
            var columntDeleted;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.Column.findByIdAndRemove(columnId)];
                    case 1:
                        columntDeleted = _a.sent();
                        return [2 /*return*/, columntDeleted];
                }
            });
        });
    };
    TodoService.removeTodo = function (columnId, todoId) {
        return __awaiter(this, void 0, void 0, function () {
            var removedTodo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.Column.findByIdAndUpdate(columnId, {
                            $pull: {
                                todos: {
                                    _id: todoId,
                                },
                            },
                        }, {
                            new: true,
                        })];
                    case 1:
                        removedTodo = _a.sent();
                        return [2 /*return*/, removedTodo];
                }
            });
        });
    };
    return TodoService;
}());
exports.TodoService = TodoService;
var todoService = new TodoService();
exports.default = todoService;
// TODO add service here
//# sourceMappingURL=np.service.js.map