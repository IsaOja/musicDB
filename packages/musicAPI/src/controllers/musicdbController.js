
const db =require ('../../mySQL/app');

const musicdbModel = require("../models/musicdbModel");

// Hämta alla artister med album och låtar
async function getAllArtists(req, res) {
  try {
    const artists = await musicdbModel.getAllArtists();
    res.json(artists);
  } catch (err) {
    console.error("Fel vid hämtning:", err.message);
    res.status(500).json({ error: "Serverfel" });
  }
}

// Skapa en ny artist
async function createArtist(req, res) {
  const { name, genre, country } = req.body;

  try {
    const newArtist = await musicdbModel.createArtist(name, genre, country);
    res.status(201).json(newArtist);
  } catch (err) {
    console.error("Fel vid skapande:", err.message);
    res.status(500).json({ error: "Kunde inte skapa artist" });
  }
}

// Uppdatera en artist
async function updateArtist(req, res) {
  const { id } = req.params;
  const { name, genre, country } = req.body;

  try {
    const updatedArtist = await musicdbModel.updateArtist(id, name, genre, country);
    res.json(updatedArtist);
  } catch (err) {
    console.error("Fel vid uppdatering:", err.message);
    res.status(500).json({ error: "Kunde inte uppdatera artist" });
  }
}

// Ta bort en artist
async function deleteArtist(req, res) {
  const { id } = req.params;

  try {
    const message = await musicdbModel.deleteArtist(id);
    res.json(message);
  } catch (err) {
    console.error("Fel vid borttagning:", err.message);
    res.status(500).json({ error: "Kunde inte ta bort artist" });
  }
}

module.exports = {
  getAllArtists,
  createArtist,
  updateArtist,
  deleteArtist,
};
