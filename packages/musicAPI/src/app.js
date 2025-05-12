const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysqlRoutes = require("./routes/musicdbRoutes");
const mongoRoutes = require("./routes/mongodbRoutes");

const app = express();
app.use(cors());
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/mysql", mysqlRoutes);
app.use("/api/mongodb", mongoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
