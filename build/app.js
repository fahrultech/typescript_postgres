"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const api_1 = __importDefault(require("./api/api"));
class App {
    constructor() {
        this._app = (0, express_1.default)();
        this.api = new api_1.default;
        this.configuration();
    }
    get app() {
        return this._app;
    }
    configuration() {
        this.app.use((0, morgan_1.default)('combined'));
        this.app.use(express_1.default.json());
        this.app.use('/api/v1', this.api.app);
    }
}
exports.default = App;
