const express = require("express");
const router = express.Router();
const db = require("../db"); // Ensure this path is correct and points to db.js

// Hämta alla artister
router.get("/artists", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Artister");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Lägg till en ny artist
router.post("/artists", async (req, res) => {
  const { ArtistNamn, ArtistInfo } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO Artister (ArtistNamn, ArtistInfo) VALUES (?, ?)",
      [ArtistNamn, ArtistInfo]
    );
    res.json({ id: result.insertId, ArtistNamn, ArtistInfo });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
