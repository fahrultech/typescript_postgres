import express, { Express } from 'express'
import morgan  from 'morgan';
import Api from './api/api'

class App {
    private _app:Express;
    private api:Api;

    constructor(){
        this._app = express()
        this.api = new Api
        this.configuration()
    }

    public get app(){
        return this._app
    }

    public configuration(){
        this.app.use(morgan('combined'))
        this.app.use(express.json())
        this.app.use('/api/v1', this.api.app)
    }
}

export default App