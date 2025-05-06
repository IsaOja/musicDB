const express = require("express");
const router = express.Router();
const Artist = require("../../mongoDB/mongodb");

// Hämta alla artister
router.get("/artists", async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Lägg till en ny artist
router.post("/artists", async (req, res) => {
  const { name, genre, country, albums } = req.body;
  try {
    const newArtist = new Artist({ name, genre, country, albums });
    await newArtist.save();
    res.json(newArtist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ta bort en artist
router.delete("/artists/:id", async (req, res) => {
  try {
    const artistId = req.params.id;
    const result = await Artist.findOneAndDelete({ id: artistId });
    if (!result) {
      return res.status(404).json({ error: "Artist not found" });
    }
    res.json({ message: "Artist deleted successfully" });
  } catch (err) {
    console.error("Error deleting artist:", err.message);
    res.status(500).json({ error: "Failed to delete artist" });
  }
});

// Uppdatera en artist
router.put("/artists/:id", async (req, res) => {
  try {
    const artistId = req.params.id;
    const updatedData = req.body;

    const result = await Artist.findOneAndUpdate(
      { id: artistId }, // Match the artist by the `id` field
      updatedData, // Update the artist with the new data
      { new: true } // Return the updated document
    );

    if (!result) {
      return res.status(404).json({ error: "Artist not found" });
    }

    res.json(result);
  } catch (err) {
    console.error("Error updating artist:", err.message);
    res.status(500).json({ error: "Failed to update artist" });
  }
});
module.exports = router;
