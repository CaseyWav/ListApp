const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "userListDB",
password: "password",
database:"list_app" 
})

module.exports = db;