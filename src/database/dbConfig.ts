import { Pool } from 'pg';

const pool = new Pool ({
    //max: 20,
    connectionString : 'postgresql://root:password@localhost:5440/root?sslmode=disable',
    //idleTimeoutMillis: 30000
});

export default pool;