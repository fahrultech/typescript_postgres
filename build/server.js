"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const dbConfig_1 = __importDefault(require("./database/dbConfig"));
const app_1 = __importDefault(require("./app"));
class Server {
    constructor() {
        this.dbConnect();
        this.app = new app_1.default;
    }
    startServer() {
        const server = http_1.default.createServer(this.app.app);
        const PORT = process.env.PORT || 3500;
        server.listen(PORT, () => console.log(`Server Listen on Port : ${PORT}`));
    }
    dbConnect() {
        dbConfig_1.default.connect((err, client, done) => {
            if (err)
                throw new Error('Error');
            console.log('Database Connected');
        });
    }
}
const server = new Server;
server.startServer();
