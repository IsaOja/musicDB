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

module.exports = router;
