require('dotenv').config();
const mysql = require('mysql');
console.log('Get connection ...');

const conn = mysql.createPool({
  connectionLimit : 10,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  useConnectionPooling: true
});

console.log("Connected To DataBase!");

module.exports = conn;