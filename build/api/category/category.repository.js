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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepository = void 0;
const dbConfig_1 = __importDefault(require("../../database/dbConfig"));
class CategoryRepository {
    constructor() {
        this.save = (category) => __awaiter(this, void 0, void 0, function* () {
            const { name } = category;
            const text = 'INSERT INTO category(name) VALUES($1) RETURNING *';
            const values = [name];
            const client = yield dbConfig_1.default.connect();
            const res = yield client.query(text, values);
            return res.rows[0];
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            const text = 'SELECT * FROM category WHERE id = $1';
            const values = [id];
            const client = yield dbConfig_1.default.connect();
            const res = yield client.query(text, values);
            return res.rows[0];
        });
        this.find = (limit, skip) => __awaiter(this, void 0, void 0, function* () {
            const text = 'SELECT * FROM category ORDER BY id';
            const client = yield dbConfig_1.default.connect();
            const res = yield client.query(text);
            return res.rows;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const text = 'DELETE FROM category WHERE id = $1';
            const values = [id];
            const client = yield dbConfig_1.default.connect();
            const res = yield client.query(text, values);
            return res.rows[0];
        });
        this.update = (id, category) => __awaiter(this, void 0, void 0, function* () {
            const { name } = category;
            const text = 'UPDATE category SET name = $2 WHERE id = $1 RETURNING *';
            const values = [id, name];
            const client = yield dbConfig_1.default.connect();
            const res = yield client.query(text, values);
            return res.rows[0];
        });
    }
}
exports.CategoryRepository = CategoryRepository;
