<template>
  <div>
    <h1>Songs</h1>
    <div class="song-list">
      <Song v-for="song in songs" :key="song.id" :song="song" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Song from '../components/Song.vue';

const songs = ref([
  { id: 1, title: 'Blank Space', artist: 'Taylor Swift', album: '1989', duration: '3:51' },
  { id: 2, title: 'Come Together', artist: 'The Beatles', album: 'Abbey Road', duration: '4:19' },
  // Add more songs as needed
]);
</script>

<style scoped>
.song-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>