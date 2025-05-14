<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const artists = ref([]);
    const newArtist = ref({
      name: "",
      genre: "",
      about: "",
    });
    const editingArtist = ref(null);

    // Fetch all artists
    const fetchArtists = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/mysql/artists");
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.statusText}`);
        }
        artists.value = await res.json();
      } catch (err) {
        console.error("Error fetching artists:", err.message);
      }
    };

    // Add a new artist
    const addArtist = async () => {
      const res = await fetch("http://localhost:3000/api/mysql/artists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newArtist.value),
      });
      const data = await res.json();
      console.log("Add artist result:", data);
      newArtist.value = { name: "", genre: "", about: "" };
      fetchArtists();
    };

    // Delete an artist
    const deleteArtist = async (id) => {
      await fetch(`http://localhost:3000/api/mysql/artists/${id}`, {
        method: "DELETE",
      });
      fetchArtists();
    };

    // Edit an artist
    const editArtist = (artist) => {
      editingArtist.value = JSON.parse(JSON.stringify(artist));
    };

    // Update an artist
    const updateArtist = async () => {
      await fetch(`http://localhost:3000/api/mysql/artists/${editingArtist.value.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingArtist.value),
      });
      editingArtist.value = null;
      fetchArtists();
    };

    // Cancel editing
    const cancelEdit = () => {
      editingArtist.value = null;
    };

    onMounted(fetchArtists);

    return {
      artists,
      newArtist,
      editingArtist,
      fetchArtists,
      addArtist,
      deleteArtist,
      editArtist,
      updateArtist,
      cancelEdit,
    };
  },
};
</script>

<template>
  <div class="container-fluid mt-5">
    <h1 class="text-center mb-4">MySQL Artists</h1>

    <!-- Add New Artist Form -->
    <div class="card mb-4 mx-auto" style="max-width: 900px">
      <div class="card-body">
        <h2 class="card-title">Add New Artist</h2>
        <div class="mb-3">
          <input v-model="newArtist.name" class="form-control" placeholder="Name" />
        </div>
        <div class="mb-3">
          <input v-model="newArtist.genre" class="form-control" placeholder="Genre" />
        </div>
        <div class="mb-3">
          <textarea v-model="newArtist.about" class="form-control" placeholder="About Artist" rows="3"></textarea>
        </div>
        <div class="d-flex justify-content-center align-items-center mt-3">
          <button @click="addArtist" class="btn btn-primary">Add Artist</button>
        </div>
      </div>
    </div>

    <!-- Artists List -->
    <div v-if="artists.length" class="row justify-content-center">
      <h2 class="text-center mb-4">Artists</h2>
      <div v-for="artist in artists" :key="artist.id" class="col-12 mb-4">
        <div v-if="editingArtist && editingArtist.id === artist.id">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">Edit Artist</h2>
              <div class="mb-3">
                <input v-model="editingArtist.name" class="form-control" placeholder="Name" />
              </div>
              <div class="mb-3">
                <input v-model="editingArtist.genre" class="form-control" placeholder="Genre" />
              </div>
              <div class="mb-3">
                <textarea
                  v-model="editingArtist.about"
                  class="form-control"
                  placeholder="About Artist"
                  rows="3"
                ></textarea>
              </div>
              <div class="d-flex justify-content-center align-items-center mt-3 gap-2">
                <button @click="updateArtist" class="btn btn-primary">Save Changes</button>
                <button @click="cancelEdit" class="btn btn-secondary">Cancel</button>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="card h-100">
          <div class="card-body">
            <h3 class="card-title">{{ artist.name }}</h3>
            <p><strong>Genre:</strong> {{ artist.genre }}</p>
            <p><strong>About Artist:</strong> {{ artist.about }}</p>
          </div>
          <div class="card-footer d-flex justify-content-center gap-2">
            <button @click="deleteArtist(artist.id)" class="btn btn-danger">Delete</button>
            <button @click="editArtist(artist)" class="btn btn-primary">Edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
