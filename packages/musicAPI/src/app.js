// app.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const mysqlRoutes = require("./routes/musicdbRoutes");
const mongoRoutes = require("./routes/mongodbRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutter
app.use("/api/mysql", mysqlRoutes);
app.use("/api/mongodb", mongoRoutes);

module.exports = app;
