const mongoose = require("mongoose");
const Counter = require("./counter");

mongoose.connect("mongodb://localhost:27017/lab33", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function seedCounter() {
  try {
    await Counter.create({ _id: "artistId", seq: 0 });
    console.log("Counter initialized successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error initializing counter:", err.message);
    mongoose.connection.close();
  }
}

seedCounter();
