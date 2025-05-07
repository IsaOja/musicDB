const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  _id: String, // The name of the counter (e.g., "artistId")
  seq: Number, // The current value of the counter
});

const Counter = mongoose.model("Counter", counterSchema);

module.exports = Counter;
