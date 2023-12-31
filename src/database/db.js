const mysql = require('mysql2/promise')
const dot = require('dotenv')
dot.config();

const dataBase = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE
})

module.exports = { dataBase }