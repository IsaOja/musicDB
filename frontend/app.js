// Hämta alla artister från MySQL
async function fetchMySQLArtists() {
    try {
      const response = await fetch("http://localhost:3000/api/mysql/artists");
      const artists = await response.json();
      console.log(artists);  // Här kan du visa artister i din UI
    } catch (error) {
      console.error("Error fetching MySQL artists:", error);
    }
  }
  
  // Hämta alla artister från MongoDB
  async function fetchMongoArtists() {
    try {
      const response = await fetch("http://localhost:3000/api/mongodb/artists");
      const artists = await response.json();
      console.log(artists);  // Här kan du visa artister i din UI
    } catch (error) {
      console.error("Error fetching MongoDB artists:", error);
    }
  }
  

  // Lägg till en artist i MySQL
async function addMySQLArtist(name, info) {
    try {
      const response = await fetch("http://localhost:3000/api/mysql/artists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ArtistNamn: name,
          ArtistInfo: info
        })
      });
  
      const newArtist = await response.json();
      console.log(newArtist);  // Här kan du visa den nya artisten i UI
    } catch (error) {
      console.error("Error adding MySQL artist:", error);
    }
  }
  
  // Lägg till en artist i MongoDB
  async function addMongoArtist(name, genre, country, albums) {
    try {
      const response = await fetch("http://localhost:3000/api/mongodb/artists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          genre: genre,
          country: country,
          albums: albums
        })
      });
  
      const newArtist = await response.json();
      console.log(newArtist);  // Här kan du visa den nya artisten i UI
    } catch (error) {
      console.error("Error adding MongoDB artist:", error);
    }
  }

  

  // Uppdatera artist i MySQL
async function updateMySQLArtist(id, name, info) {
    try {
      const response = await fetch(`http://localhost:3000/api/mysql/artists/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ArtistNamn: name,
          ArtistInfo: info
        })
      });
  
      const updatedArtist = await response.json();
      console.log(updatedArtist);  // Här kan du visa den uppdaterade artisten i UI
    } catch (error) {
      console.error("Error updating MySQL artist:", error);
    }
  }
  
  // Uppdatera artist i MongoDB
  async function updateMongoArtist(id, name, genre, country, albums) {
    try {
      const response = await fetch(`http://localhost:3000/api/mongodb/artists/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          genre: genre,
          country: country,
          albums: albums
        })
      });
  
      const updatedArtist = await response.json();
      console.log(updatedArtist);  // Här kan du visa den uppdaterade artisten i UI
    } catch (error) {
      console.error("Error updating MongoDB artist:", error);
    }
  }


  // Radera artist från MySQL
async function deleteMySQLArtist(id) {
    try {
      const response = await fetch(`http://localhost:3000/api/mysql/artists/${id}`, {
        method: "DELETE"
      });
  
      const result = await response.json();
      console.log(result);  // Här kan du ta bort artisten från UI
    } catch (error) {
      console.error("Error deleting MySQL artist:", error);
    }
  }
  
  // Radera artist från MongoDB
  async function deleteMongoArtist(id) {
    try {
      const response = await fetch(`http://localhost:3000/api/mongodb/artists/${id}`, {
        method: "DELETE"
      });
  
      const result = await response.json();
      console.log(result);  // Här kan du ta bort artisten från UI
    } catch (error) {
      console.error("Error deleting MongoDB artist:", error);
    }
  }
  
  
