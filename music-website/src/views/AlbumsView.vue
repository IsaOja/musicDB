<template>
  <div>
    <h1>Albums</h1>
    <div class="album-list">
      <Album v-for="album in albums" :key="album.id" :album="album" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Album from '../components/Album.vue';

const albums = ref([
  { id: 1, title: '1989', cover: 'path/to/cover1.jpg', tracks: ['Blank Space', 'Style'] },
  { id: 2, title: 'Abbey Road', cover: 'path/to/cover2.jpg', tracks: ['Come Together', 'Something'] },
  // Add more albums as needed
]);
</script>

<style scoped>
.album-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>