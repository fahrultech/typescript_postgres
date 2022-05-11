import CategoryRoutes from './category/category.routes'
import express, {Express} from 'express'

class Api {
    private _app:Express;

    constructor(){
        this._app = express()
        this.categoryRoutes()
    }
    public get app():Express {
        return this._app
    }

    // Category Router
    private categoryRoutes():void {
        const category = new CategoryRoutes
        this.app.use('/category', category.router)
    }
}

export default Api