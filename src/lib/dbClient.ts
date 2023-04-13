const Pool = require('pg').Pool;
import * as dotenv from 'dotenv';
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWD,
    port: process.env.DB_PORT
})

export const getAllArtists = () => {
    return pool.query("SELECT * FROM author")
}