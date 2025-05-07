const mongoose = require("mongoose");
const Counter = require("./counter");

mongoose.connect("mongodb://localhost:27017/lab33", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const artistSchema = new mongoose.Schema({
  id: Number, // Auto-incremented ID
  name: String,
  genre: String,
  country: String,
  albums: [
    {
      title: String,
      release_year: Number,
      tracks: [{ title: String, duration: String }],
    },
  ],
});

// Pre-save hook to auto-increment the ID
artistSchema.pre("save", async function (next) {
  if (!this.isNew) return next(); // Only increment on new documents

  try {
    const counter = await Counter.findByIdAndUpdate(
      { _id: "artistId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true } // Create the counter if it doesn't exist
    );
    this.id = counter.seq;
    next();
  } catch (err) {
    next(err);
  }
});

const Artist = mongoose.model("Artist", artistSchema);

// Example: Insert artists into the database
async function seedDatabase() {
  try {
    await Artist.insertMany([
      {
        name: "Yasin",
        genre: "Hip Hop",
        country: "Sweden",
        albums: [
          {
            title: "Trakten",
            release_year: 2023,
            tracks: [
              { title: "Mörka Tider", duration: "2:32" },
              { title: "Högt Tempo", duration: "3:43" },
            ],
          },
        ],
      },
      {
        name: "Asme",
        genre: "Hip Hop",
        country: "Sweden",
        albums: [
          {
            title: "Staden Sover",
            release_year: 2023,
            tracks: [
              { title: "Där vi hör hemma", duration: "4:32" },
              { title: "Från Röd till Blå", duration: "2:21" },
            ],
          },
        ],
      },
    ]);
    console.log("Database seeded successfully!");
  } catch (err) {
    console.error("Error seeding database:", err.message);
  }
}

// Uncomment the following line to seed the database when this file is run
// seedDatabase();

module.exports = Artist;
