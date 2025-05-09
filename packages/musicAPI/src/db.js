const mysql = require('mysql2');

const pool = mysql.createPool({
  host: "localhost",
  user: "root", // Replace with your MySQL username
  password: "password", // Replace with your MySQL password
  database: "MusikDatabas", // Ensure this matches your database name
});

module.exports = pool.promise();
