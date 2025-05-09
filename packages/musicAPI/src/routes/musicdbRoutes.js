const express = require("express");
const router = express.Router();
const db = require("../db"); // Databasanslutning

// Hämta alla artister
router.get("/artists", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Artister");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Lägg till ny artist
router.post("/artists", async (req, res) => {
  const { ArtistNamn, ArtistInfo } = req.body;

  try {
    const [result] = await db.query(
      "INSERT INTO Artister (ArtistNamn, ArtistInfo) VALUES (?, ?)",
      [ArtistNamn, ArtistInfo]
    );
    res.status(201).json({ id: result.insertId, ArtistNamn, ArtistInfo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Uppdatera artist
router.put("/artists/:id", async (req, res) => {
  const { id } = req.params;
  const { ArtistNamn, ArtistInfo } = req.body;

  try {
    await db.query(
      "UPDATE Artister SET ArtistNamn = ?, ArtistInfo = ? WHERE id = ?",
      [ArtistNamn, ArtistInfo, id]
    );
    res.json({ id, ArtistNamn, ArtistInfo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ta bort artist
router.delete("/artists/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await db.query("DELETE FROM Artister WHERE id = ?", [id]);
    res.json({ message: `Artist med ID ${id} har tagits bort.` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
