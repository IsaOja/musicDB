// GET – hämta alla artister
async function getMySQLArtists() {
    const res = await fetch("http://localhost:3000/api/mysql/artists");
    const data = await res.json();
    console.log("🎵 MySQL-artister:", data);
  }
  
  // POST – lägg till ny artist
  async function addMySQLArtist(namn, info) {
    const res = await fetch("http://localhost:3000/api/mysql/artists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ArtistNamn: namn, ArtistInfo: info })
    });A
    const data = await res.json();
    console.log("✅ Ny MySQL-artist:", data);
  }
  
  // PUT – uppdatera en artist
  async function updateMySQLArtist(id, namn, info) {
    const res = await fetch(`http://localhost:3000/api/mysql/artists/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ArtistNamn: namn, ArtistInfo: info })
    });
    const data = await res.json();
    console.log("✏️ Uppdaterad MySQL-artist:", data);
  }
  
  // DELETE – ta bort en artist
  async function deleteMySQLArtist(id) {
    const res = await fetch(`http://localhost:3000/api/mysql/artists/${id}`, {
      method: "DELETE"
    });
    const data = await res.json();
    console.log("🗑️ Borttagen MySQL-artist:", data);
  }
  
  
  // ========== MongoDB-artister ==========
  
  // GET – hämta alla artister
  async function getMongoArtists() {
    const res = await fetch("http://localhost:3000/api/mongodb/artists");
    const data = await res.json();
    console.log("🎵 MongoDB-artister:", data);
  }
  
  // POST – lägg till ny artist
  async function addMongoArtist(name, genre, country, albums) {
    const res = await fetch("http://localhost:3000/api/mongodb/artists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, genre, country, albums })
    });
    const data = await res.json();
    console.log("✅ Ny MongoDB-artist:", data);
  }
  
  // PUT – uppdatera en artist
  async function updateMongoArtist(id, name, genre, country, albums) {
    const res = await fetch(`http://localhost:3000/api/mongodb/artists/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, genre, country, albums })
    });
    const data = await res.json();
    console.log("✏️ Uppdaterad MongoDB-artist:", data);
  }
  
  // DELETE – ta bort en artist
  async function deleteMongoArtist(id) {
    const res = await fetch(`http://localhost:3000/api/mongodb/artists/${id}`, {
      method: "DELETE"
    });
    const data = await res.json();
    console.log("🗑️ Borttagen MongoDB-artist:", data);
  }
  