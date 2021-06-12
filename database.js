require('dotenv').config();
const mysql = require('mysql');
console.log('Get connection ...');

var conn = mysql.createConnection({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected To DataBase!");
});

module.exports = conn;