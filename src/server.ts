import http from 'http'
import { Express } from 'express'
import pool from './database/dbConfig'
import App from './app'

class Server {
    private app:App
    constructor(){
        this.dbConnect()
        this.app = new App
    }

    public startServer(){
        const server:http.Server = http.createServer(this.app.app);
        const PORT = process.env.PORT || 3500
        server.listen(PORT, () => console.log(`Server Listen on Port : ${PORT}`))
    }

    private dbConnect(){
        pool.connect((err, client, done) => {
            if(err) throw new Error('Error');
            console.log('Database Connected')
        })
    }
}   
const server = new Server
server.startServer()