<template>
  <div>
    <h1>Artists</h1>
    <div class="artist-list">
      <Artist v-for="artist in artists" :key="artist.id" :artist="artist" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Artist from "../components/Artist.vue";

const artists = ref([
  {
    id: 1,
    name: "Taylor Swift",
    biography: "American singer-songwriter",
    albums: ["1989", "Lover"],
  },
  {
    id: 2,
    name: "The Beatles",
    biography: "British rock band from Liverpool",
    albums: ["Abbey Road", "Sgt. Pepper's"],
  },
  // Add more artists as needed
]);
</script>

<style scoped>
.artist-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
