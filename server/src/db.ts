import { Pool } from 'pg';

export const pool = new Pool({
    user: 'user',
    host: 'localhost',
    password: 'pass',
    database: 'hacktemplate',
    port: 5432
});