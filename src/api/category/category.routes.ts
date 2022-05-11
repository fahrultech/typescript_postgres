import express, { Router } from 'express'
import { CategoryController } from './category.controller'


class CategoryRoutes {
    private _router:Router;
  
    constructor(){
        this._router = express.Router()
        this.setRouter()
    }
    public get router(){
        return this._router
    }

    private setRouter():void {
        const category = new CategoryController
        this._router.route('/').get(category.getAllCategory).post(category.createCategory)
        this._router.route('/:id').get(category.getCategoryById).put(category.updateCategory).delete(category.deleteCategory)
    }
}

export default CategoryRoutes
