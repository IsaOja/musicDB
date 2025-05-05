
// Hämta alla artister från MySQL
async function getMySQLArtists() {
    const res = await fetch("http://localhost:3000/api/mysql/artists");
    const data = await res.json();
    console.log("MySQL artister:", data);
  }
  
  // Lägg till artist i MySQL(post)
  async function addMySQLArtist(namn, info) {
    const res = await fetch("http://localhost:3000/api/mysql/artists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ArtistNamn: namn,
        ArtistInfo: info
      })
    });// === MySQL-artister ===

// GET – hämta alla artister från MySQL-databasen
async function hamtaMySQLArtister() {
  const res = await fetch("http://localhost:3000/api/mysql/artists");
  const data = await res.json();
  console.log("Artister från MySQL:", data);
}

// POST – lägg till en ny artist i MySQL
async function laggTillMySQLArtist(namn, info) {
  const res = await fetch("http://localhost:3000/api/mysql/artists", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ArtistNamn: namn, ArtistInfo: info })
  });

  const data = await res.json();
  console.log("Lade till artist i MySQL:", data);
}

// PUT – uppdatera befintlig artist i MySQL
async function uppdateraMySQLArtist(id, namn, info) {
  const res = await fetch(`http://localhost:3000/api/mysql/artists/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ArtistNamn: namn, ArtistInfo: info })
  });

  const data = await res.json();
  console.log("Uppdaterad i MySQL:", data);
}

// DELETE – ta bort en artist från MySQL
async function taBortMySQLArtist(id) {
  const res = await fetch(`http://localhost:3000/api/mysql/artists/${id}`, {
    method: "DELETE"
  });

  const data = await res.json();
  console.log("Tog bort artist från MySQL:", data);
}



// === MongoDB-artister ===

// GET – hämta alla artister från MongoDB
async function hamtaMongoArtister() {
  const res = await fetch("http://localhost:3000/api/mongodb/artists");
  const data = await res.json();
  console.log("Artister från MongoDB:", data);
}

// POST – lägg till ny artist i MongoDB
async function laggTillMongoArtist(namn, genre, land, album) {
  const res = await fetch("http://localhost:3000/api/mongodb/artists", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: namn, genre, country: land, albums: album })
  });

  const data = await res.json();
  console.log("Lade till i MongoDB:", data);
}

// PUT – uppdatera artist i MongoDB
async function uppdateraMongoArtist(id, namn, genre, land, album) {
  const res = await fetch(`http://localhost:3000/api/mongodb/artists/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: namn, genre, country: land, albums: album })
  });

  const data = await res.json();
  console.log("Uppdaterad i MongoDB:", data);
}

// DELETE – ta bort artist från MongoDB
async function taBortMongoArtist(id) {
  const res = await fetch(`http://localhost:3000/api/mongodb/artists/${id}`, {
    method: "DELETE"
  });

  const data = await res.json();
  console.log("Tog bort från MongoDB:", data);
}

  
    const data = await res.json();
    console.log("Ny MySQL-artist:", data);
  }
  
  // (Uppdatera) artist i MySQL 
  async function updateMySQLArtist(id, namn, info) {
    const res = await fetch(`http://localhost:3000/api/mysql/artists/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ArtistNamn: namn,
        ArtistInfo: info
      })
    });
  
    const data = await res.json();
    console.log("Uppdaterad MySQL-artist:", data);
  }
  
  // (Ta bort) artist i MySQL
  async function deleteMySQLArtist(id) {
    const res = await fetch(`http://localhost:3000/api/mysql/artists/${id}`, {
      method: "DELETE"
    });
  
    const data = await res.json();
    console.log("Borttagen MySQL-artist:", data);
  }
  




  // MONGODB 
  


  
  // Hämta alla artister från MongoDB
  async function getMongoArtists() {
    const res = await fetch("http://localhost:3000/api/mongodb/artists");
    const data = await res.json();
    console.log("MongoDB artister:", data);
  }
  
  
  // Lägg till artist i MongoDB (post)
  async function addMongoArtist(name, genre, country, albums) {
    const res = await fetch("http://localhost:3000/api/mongodb/artists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        genre,
        country,
        albums
      })
    });
  
    const data = await res.json();
    console.log("Ny MongoDB-artist:", data);
  }
  
  // (Uppdatera) artist i MongoDB
  async function updateMongoArtist(id, name, genre, country, albums) {
    const res = await fetch(`http://localhost:3000/api/mongodb/artists/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        genre,
        country,
        albums
      })
    });
  
    const data = await res.json();
    console.log("Uppdaterad MongoDB-artist:", data);
  }
  
  //( Ta bort) artist i MongoDB
  async function deleteMongoArtist(id) {
    const res = await fetch(`http://localhost:3000/api/mongodb/artists/${id}`, {
      method: "DELETE"
    });
  
    const data = await res.json();
    console.log("Borttagen MongoDB-artist:", data);
  }
   