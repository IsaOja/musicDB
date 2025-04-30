<template>
  <div>
    <h1>Playlists</h1>
    <Playlist
      v-for="playlist in playlists"
      :key="playlist.id"
      :playlist="playlist"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Playlist from "../components/Playlist.vue";

const playlists = ref([
  { id: 1, name: "Chill Vibes", songs: ["Song 1", "Song 2", "Song 3"] },
  { id: 2, name: "Workout Mix", songs: ["Song 4", "Song 5", "Song 6"] },
  { id: 3, name: "Top Hits", songs: ["Song 7", "Song 8", "Song 9"] },
]);
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
