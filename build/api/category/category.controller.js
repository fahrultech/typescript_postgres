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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_repository_1 = require("./category.repository");
class CategoryController {
    constructor() {
        this.getAllCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield this.repository.find(5, 4);
                return res.status(200).json(category);
            }
            catch (error) {
                return res.status(400).json(error);
            }
        });
        this.getCategoryById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            try {
                const category = yield this.repository.findById(id);
                if (category) {
                    return res.status(200).json(category);
                }
                return res.status(404).json({ msg: 'Category Not Found' });
            }
            catch (error) {
                return res.status(400).json({ msg: error });
            }
        });
        this.createCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield this.repository.save(req.body);
                return res.status(201).json(category);
            }
            catch (error) {
                return res.status(400).json({ msg: error });
            }
        });
        this.updateCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const category = yield this.repository.update(id, req.body);
                return res.status(200).json(category);
            }
            catch (error) {
                return res.status(400).json(error);
            }
        });
        this.deleteCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const isExist = yield this.repository.findById(id);
                if (isExist) {
                    const category = yield this.repository.delete(id);
                    return res.status(204).json({ msg: 'Category has been deleted' });
                }
                return res.status(404).json({ errors: { msg: "Category Not Found" } });
            }
            catch (error) {
                return res.status(400).json(error);
            }
        });
        this.repository = new category_repository_1.CategoryRepository;
    }
}
exports.CategoryController = CategoryController;
