const app = require("./app");
const db = require("./db");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// Test MySQL connection
db.getConnection()
  .then(() => {
    console.log("Ansluten till MySQL");
  })
  .catch((err) => {
    console.error("MySQL-anslutning misslyckades:", err);
  });

// MongoDB-anslutning
mongoose
  .connect("mongodb://localhost:27017/musikdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Ansluten till MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB-anslutning misslyckades:", err);
  });

// Middleware för att lägga till MySQL i req
app.use((req, res, next) => {
  req.db = db; // Attach the MySQL connection pool to the request object
  next();
});

// Starta servern
app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
