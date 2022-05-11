"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("./category.controller");
class CategoryRoutes {
    constructor() {
        this._router = express_1.default.Router();
        this.setRouter();
    }
    get router() {
        return this._router;
    }
    setRouter() {
        const category = new category_controller_1.CategoryController;
        this._router.route('/').get(category.getAllCategory).post(category.createCategory);
        this._router.route('/:id').get(category.getCategoryById).put(category.updateCategory).delete(category.deleteCategory);
    }
}
exports.default = CategoryRoutes;
