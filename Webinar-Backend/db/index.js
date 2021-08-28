const mysql = require("mysql")

const pool = mysql.createPool({
    connectionLimit: 10,
    password: "12345678",
    user: "root",
    database: "WebinarSystem",
    host: "localhost",

})

module.exports = pool