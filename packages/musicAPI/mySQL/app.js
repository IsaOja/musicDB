const mysql = require('mysql2');

// Skapa en anslutning till MySQL-databasen
const pool = mysql.createPool({
  host: "localhost",
  user: "root", // Replace with your MySQL username
  password: "password", // Replace with your MySQL password
  database: "MusikDatabas", // Ensure this matches your database name
});

// Anslut till databasen
db.connect((err) => {
  if (err) {
    console.error('Fel vid anslutning till databasen:', err.stack);
    return;
  }
  console.log('Ansluten till databasen som id ' + db.threadId);
});

module.exports = db;
