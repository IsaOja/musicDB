<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const artists = ref([]);
    const newArtist = ref({
      name: "",
      genre: "",
      country: "",
      albums: [],
    });
    const newAlbum = ref({
      title: "",
      release_year: "",
    });
    const newTrack = ref({
      title: "",
      duration: "",
    });
    const editingArtist = ref(null);

    // Fetch all artists with albums and tracks
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
      const data = await res.json()
      console.log("Add artist resultat:", data)
      newArtist.value = { name: "", genre: "", country: "", albums: [] };
      fetchArtists();
    };

    // Add an album to the new artist
    const addAlbumToNewArtist = () => {
      if (!newAlbum.value.title || !newAlbum.value.release_year) {
        alert("Please provide both album title and release year.");
        return;
      }
      newArtist.value.albums.push({
        ...newAlbum.value,
        tracks: [],
      });
      newAlbum.value = { title: "", release_year: "" };
    };

    // Add a track to an album for the new artist
    const addTrackToNewAlbum = (albumIndex) => {
      const track = { ...newTrack.value };
      if (!track.title || !track.duration) {
        alert("Please provide both track title and duration.");
        return;
      }
      newArtist.value.albums[albumIndex].tracks.push(track);
      newTrack.value = { title: "", duration: "" };
    };

    // Remove a track from a new album
    const removeTrackFromNewAlbum = (albumIndex, trackIndex) => {
      newArtist.value.albums[albumIndex].tracks.splice(trackIndex, 1);
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
      await fetch(
        `http://localhost:3000/api/mysql/artists/${editingArtist.value.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editingArtist.value),
        }
      );
      editingArtist.value = null;
      fetchArtists();
    };

    // Add an album to the editing artist
    const addAlbumToEditingArtist = () => {
      if (!newAlbum.value.title || !newAlbum.value.release_year) {
        alert("Please provide both album title and release year.");
        return;
      }
      editingArtist.value.albums.push({
        ...newAlbum.value,
        tracks: [],
      });
      newAlbum.value = { title: "", release_year: "" };
    };

    // Add a track to an album for the editing artist
    const addTrackToAlbum = (albumIndex) => {
      const track = { ...newTrack.value };
      if (!track.title || !track.duration) {
        alert("Please provide both track title and duration.");
        return;
      }
      editingArtist.value.albums[albumIndex].tracks.push(track);
      newTrack.value = { title: "", duration: "" };
    };

    // Remove a track from an album for the editing artist
    const removeTrack = (albumIndex, trackIndex) => {
      editingArtist.value.albums[albumIndex].tracks.splice(trackIndex, 1);
    };

    // Cancel editing
    const cancelEdit = () => {
      editingArtist.value = null;
    };

    onMounted(fetchArtists);

    return {
      artists,
      newArtist,
      newAlbum,
      newTrack,
      editingArtist,
      fetchArtists,
      addArtist,
      addAlbumToNewArtist,
      addTrackToNewAlbum,
      removeTrackFromNewAlbum,
      deleteArtist,
      editArtist,
      updateArtist,
      addAlbumToEditingArtist,
      addTrackToAlbum,
      removeTrack,
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
          <input
            v-model="newArtist.name"
            class="form-control"
            placeholder="Name"
          />
        </div>
        <div class="mb-3">
          <input
            v-model="newArtist.genre"
            class="form-control"
            placeholder="Genre"
          />
        </div>
        <div class="mb-3">
          <input
            v-model="newArtist.country"
            class="form-control"
            placeholder="Country"
          />
        </div>

        <h4>Albums:</h4>
        <ul class="list-group mb-3">
          <li
            v-for="(album, albumIndex) in newArtist.albums"
            :key="album.title"
            class="list-group-item"
          >
            <strong>{{ album.title }}</strong> ({{ album.release_year }})
            <ul class="list-group mt-2">
              <li
                v-for="(track, trackIndex) in album.tracks"
                :key="track.title"
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                {{ track.title }} - {{ track.duration }}
                <button
                  @click="removeTrackFromNewAlbum(albumIndex, trackIndex)"
                  class="btn btn-danger btn-sm"
                >
                  Remove
                </button>
              </li>
            </ul>
            <!-- Add Track Form -->
            <div class="mt-3">
              <h5>Add Track</h5>
              <div class="mb-2">
                <input
                  v-model="newTrack.title"
                  class="form-control"
                  placeholder="Track Title"
                />
                <input
                  v-model="newTrack.duration"
                  class="form-control"
                  placeholder="Duration (e.g., 3:45)"
                />
              </div>
              <button
                @click="addTrackToNewAlbum(albumIndex)"
                class="btn btn-primary btn-sm"
              >
                Add Track
              </button>
            </div>
          </li>
        </ul>

        <h5>Add Album</h5>
        <div class="mb-2">
          <input
            v-model="newAlbum.title"
            class="form-control"
            placeholder="Album Title"
          />
        </div>
        <div class="mb-2">
          <input
            v-model="newAlbum.release_year"
            class="form-control"
            placeholder="Release Year"
          />
        </div>
        <div
          class="d-flex justify-content-center align-items-center mt-3 gap-2"
        >
          <button @click="addAlbumToNewArtist" class="btn btn-success">
            Add Album
          </button>
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
                <input
                  v-model="editingArtist.name"
                  class="form-control"
                  placeholder="Name"
                />
              </div>
              <div class="mb-3">
                <input
                  v-model="editingArtist.genre"
                  class="form-control"
                  placeholder="Genre"
                />
              </div>
              <div class="mb-3">
                <input
                  v-model="editingArtist.country"
                  class="form-control"
                  placeholder="Country"
                />
              </div>
              <h4>Albums:</h4>
              <ul class="list-group mb-3">
                <li
                  v-for="(album, albumIndex) in editingArtist.albums"
                  :key="album.title"
                  class="list-group-item"
                >
                  <div class="mb-2">
                    <input
                      v-model="album.title"
                      class="form-control"
                      placeholder="Album Title"
                    />
                  </div>
                  <div class="mb-2">
                    <input
                      v-model="album.release_year"
                      class="form-control"
                      placeholder="Release Year"
                    />
                  </div>
                  <ul class="list-group mt-2">
                    <li
                      v-for="(track, trackIndex) in album.tracks"
                      :key="track.title"
                      class="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <input
                          v-model="track.title"
                          class="form-control mb-2"
                          placeholder="Track Title"
                        />
                        <input
                          v-model="track.duration"
                          class="form-control"
                          placeholder="Duration (e.g., 3:45)"
                        />
                      </div>
                      <button
                        @click="removeTrack(albumIndex, trackIndex)"
                        class="btn btn-danger btn-sm"
                      >
                        Remove
                      </button>
                    </li>
                  </ul>
                  <div class="mt-3">
                    <h5>Add Track</h5>
                    <div class="mb-2">
                      <input
                        v-model="newTrack.title"
                        class="form-control"
                        placeholder="Track Title"
                      />
                    </div>
                    <div class="mb-2">
                      <input
                        v-model="newTrack.duration"
                        class="form-control"
                        placeholder="Duration (e.g., 3:45)"
                      />
                    </div>
                    <button
                      @click="addTrackToAlbum(albumIndex)"
                      class="btn btn-primary btn-sm"
                    >
                      Add Track
                    </button>
                  </div>
                </li>
              </ul>
              <h5>Add Album</h5>
              <div class="mb-2">
                <input
                  v-model="newAlbum.title"
                  class="form-control"
                  placeholder="Album Title"
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="newAlbum.release_year"
                  class="form-control"
                  placeholder="Release Year"
                />
              </div>
              <div
                class="d-flex justify-content-center align-items-center mt-3 gap-2"
              >
                <button
                  @click="addAlbumToEditingArtist"
                  class="btn btn-success"
                >
                  Add Album
                </button>
                <div class="d-flex gap-2">
                  <button @click="updateArtist" class="btn btn-primary">
                    Save Changes
                  </button>
                  <button @click="cancelEdit" class="btn btn-secondary">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="card h-100">
          <div class="card-body">
            <h3 class="card-title">{{ artist.name }}</h3>
            <p><strong>Genre:</strong> {{ artist.genre }}</p>
            <p><strong>Country:</strong> {{ artist.country }}</p>
            <h4>Albums:</h4>
            <ul class="list-group">
              <li
                v-for="album in artist.albums"
                :key="album.title"
                class="list-group-item"
              >
                <strong>{{ album.title }}</strong> ({{ album.release_year }})
                <ul class="list-group mt-2">
                  <li
                    v-for="track in album.tracks"
                    :key="track.title"
                    class="list-group-item"
                  >
                    {{ track.title }} - {{ track.duration }}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="card-footer d-flex justify-content-center gap-2">
            <button @click="deleteArtist(artist.id)" class="btn btn-danger">
              Delete
            </button>
            <button @click="editArtist(artist)" class="btn btn-primary">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
