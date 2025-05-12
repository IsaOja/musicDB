const express = require("express");
const router = express.Router();
const musicdbController = require("../controllers/musicdbController"); // Importera musicdbController
const db = require("../db"); // Databasanslutning

const musicdbModel = {
  async getAllArtists() {
    const [rows] = await db.query("SELECT * FROM Artister");
    return rows;
  },

  async createArtist(ArtistNamn, ArtistInfo) {
    const [result] = await db.query(
      "INSERT INTO Artister (ArtistNamn, ArtistInfo) VALUES (?, ?)",
      [ArtistNamn, ArtistInfo]
    );
    return { id: result.insertId, ArtistNamn, ArtistInfo };
  },

  async updateArtist(id, ArtistNamn, ArtistInfo) {
    await db.query(
      "UPDATE Artister SET ArtistNamn = ?, ArtistInfo = ? WHERE ArtistID = ?",
      [ArtistNamn, ArtistInfo, id]
    );
    return { id, ArtistNamn, ArtistInfo };
  },

  async deleteArtist(id) {
    await db.query("DELETE FROM Artister WHERE ArtistID = ?", [id]);
    return { message: `Artist med ID ${id} har tagits bort.` };
  },
};

module.exports = musicdbModel;
