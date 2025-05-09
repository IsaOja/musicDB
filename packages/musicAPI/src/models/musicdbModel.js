const express = require('express');
const router = express.Router();
const musicdbController = require('../controllers/musicdbController');  // Importera musicdbController

// Hämta alla artister
router.get('/artists', musicdbController.getAllArtists);

// Lägg till en ny artist
router.post('/artists', musicdbController.createArtist);

// Uppdatera en artist
router.put('/artists/:id', musicdbController.updateArtist);

// Ta bort en artist
router.delete('/artists/:id', musicdbController.deleteArtist);

module.exports = router;
