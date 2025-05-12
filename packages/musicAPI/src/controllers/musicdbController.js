const db = require('../db');  

// Hämta alla artister med album och låtar
async function getAllArtists(req, res) {
  try {
    const [rows] = await db.execute(`
      SELECT 
        Artist.id AS artist_id,
        Artist.name AS artist_name,
        Artist.genre,
        Artist.country,
        Album.id AS album_id,
        Album.title AS album_title,
        Album.release_year,
        Track.id AS track_id,
        Track.title AS track_title,
        Track.duration
      FROM Artist
      LEFT JOIN Album ON Album.artist_id = Artist.id
      LEFT JOIN Track ON Track.album_id = Album.id
      ORDER BY Artist.id, Album.id, Track.id;
    `);

    const artists = new Map();

    for (const row of rows) {
      if (!artists.has(row.artist_id)) {
        artists.set(row.artist_id, {
          id: row.artist_id,
          name: row.artist_name,
          genre: row.genre,
          country: row.country,
          albums: [],
        });
      }

      const artist = artists.get(row.artist_id);

      if (row.album_id) {
        let album = artist.albums.find(a => a.id === row.album_id);
        if (!album) {
          album = {
            id: row.album_id,
            title: row.album_title,
            release_year: row.release_year,
            tracks: [],
          };
          artist.albums.push(album);
        }

        if (row.track_id) {
          album.tracks.push({
            id: row.track_id,
            title: row.track_title,
            duration: row.duration,
          });
        }
      }
    }

    res.json(Array.from(artists.values()));
  } catch (err) {
    console.error("Fel vid hämtning:", err.message);
    res.status(500).json({ error: "Serverfel" });
  }
}

// Skapa ny artist
async function createArtist(req, res) {
  const { name, genre, country } = req.body;

  try {
    const [result] = await db.execute(
      "INSERT INTO Artist (name, genre, country) VALUES (?, ?, ?)",
      [name, genre, country]
    );

    res.status(201).json({
      id: result.insertId,
      name,
      genre,
      country,
    });
  } catch (err) {
    console.error("Fel vid skapande:", err.message);
    res.status(500).json({ error: "Kunde inte skapa artist" });
  }
}

// Uppdatera artist
async function updateArtist(req, res) {
  const { id } = req.params;
  const { name, genre, country } = req.body;

  try {
    await db.execute(
      "UPDATE Artist SET name = ?, genre = ?, country = ? WHERE id = ?",
      [name, genre, country, id]
    );

    res.json({ id, name, genre, country });
  } catch (err) {
    console.error("Fel vid uppdatering:", err.message);
    res.status(500).json({ error: "Kunde inte uppdatera artist" });
  }
}

// Ta bort artist
async function deleteArtist(req, res) {
  const { id } = req.params;

  try {
    await db.execute("DELETE FROM Artist WHERE id = ?", [id]);
    res.json({ message: `Artist med ID ${id} har tagits bort.` });
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
