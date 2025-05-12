const Counter = require("./counter");
const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  id: Number,
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

artistSchema.pre("save", async function (next) {
  if (!this.isNew) return next();

  try {
    const counter = await Counter.findByIdAndUpdate(
      { _id: "artistId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this.id = counter.seq;
    next();
  } catch (err) {
    next(err);
  }
});

const Artist = mongoose.model("Artist", artistSchema);

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

module.exports = Artist;
