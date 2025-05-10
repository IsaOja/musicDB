const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Skapa en MySQL-anslutning
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'MusikDatabas'
});

// Anslut till databasen
db.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Gör databasanslutningen tillgänglig i req-objektet
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Rutter
const mysqlRoutes = require('../src/routes/musicdbRoutes');
app.use('/api/mysql', mysqlRoutes);

// Starta servern
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
