"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
// import AppRouter from "./routes";
var database_1 = __importDefault(require("./config/database"));
var PORT = process.env.PORT;
console.log("port", PORT);
var app = (0, express_1.default)();
// const router = new AppRouter(app);
(0, database_1.default)();
app.set("port", PORT || 3000);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// router.init();
var port = app.get("port");
// eslint-disable-next-line no-console
var server = app.listen(port, function () {
    return console.log("Server started on port ".concat(port));
});
exports.default = server;
//# sourceMappingURL=server.js.map