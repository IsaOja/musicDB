
use("lab33");

// Skapa collection "artists"
db.createCollection("artists");

// Lägg in två artister


db.artists.insertMany([
  {
    _id: ObjectId("6810ca26e062951e2a782365"),
    name: "Yasin",
    genre: "Hip Hop",
    country: "Sweden",
    albums: [
      {
        title: "Trakten",
        release_year: 2023,
        tracks: [
          { title: "Mörka Tider", duration: "2:32" },
          { title: "Högt Tempo", duration: "3:43" }
        ]
      }
    ]
  },
  {
    _id: ObjectId("6810ca26e062951e2a782366"),
    name: "Asme",
    genre: "Hip Hop",
    country: "Sweden",
    albums: [
      {
        title: "Staden Sover",
        release_year: 2023,
        tracks: [
          { title: "Där vi hör hemma", duration: "4:32" },
          { title: "Från Röd till Blå", duration: "2:21" }
        ]
      }
    ]
  }
]);

// Visa all data i artists
db.artists.find().pretty();

// Visa specifik artist
db.artists.find({ name: "Yasin" }).pretty();

// Lägg till album till artist (exempelvis om Einár skulle finnas)
db.artists.updateOne(
  { name: "Einár" },
  {
    $push: {
      albums: {
        title: "Andra Albumet",
        release_year: 2022,
        tracks: [
          { title: "Ny Låt A", duration: "1:00" },
          { title: "Ny Låt B", duration: "3:40" }
        ]
      }
    }
  }
);

// Ta bort artisten Asme
db.artists.deleteOne({ name: "Asme" });

// Hämta alla tracks från ett visst album ("Trakten")
db.artists.find(
  { "albums.title": "Trakten" },
  { "albums.$": 1, name: 1 }
).pretty();
