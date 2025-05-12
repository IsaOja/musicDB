const mysql = require('mysql2');

const pool = mysql.createPool({
  host: "localhost",
  user: "root", 
  password: "password", 
  database: "MusikDatabas", 
});

module.exports = pool.promise();
