"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_routes_1 = __importDefault(require("./category/category.routes"));
const express_1 = __importDefault(require("express"));
class Api {
    constructor() {
        this._app = (0, express_1.default)();
        this.categoryRoutes();
    }
    get app() {
        return this._app;
    }
    // Category Router
    categoryRoutes() {
        const category = new category_routes_1.default;
        this.app.use('/category', category.router);
    }
}
exports.default = Api;
