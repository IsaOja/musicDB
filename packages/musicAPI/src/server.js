// server.js
const app = require("./app");
const mysql = require("mysql2");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// MySQL-anslutning
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "MusikDatabas"
});

db.connect((err) => {
  if (err) {
    console.error("MySQL-anslutning misslyckades:", err);
  } else {
    console.log("Ansluten till MySQL");
  }
});

// MongoDB-anslutning
mongoose.connect("mongodb://localhost:27017/musikdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Ansluten till MongoDB");
}).catch(err => {
  console.error("MongoDB-anslutning misslyckades:", err);
});

// Middleware för att lägga till MySQL i req
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Starta servern
app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
