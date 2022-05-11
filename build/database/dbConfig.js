"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    //max: 20,
    connectionString: 'postgresql://root:password@localhost:5440/root?sslmode=disable',
    //idleTimeoutMillis: 30000
});
exports.default = pool;
