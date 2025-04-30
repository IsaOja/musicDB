<template>
  <div class="artist">
    <h2>{{ artist.name }}</h2>
    <p>{{ artist.biography }}</p>
    <h3>Albums:</h3>
    <ul>
      <li v-for="album in artist.albums" :key="album.id">
        {{ album.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Artist",
  props: {
    artist: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.artist {
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}
.artist h2 {
  color: #333;
}
.artist h3 {
  margin-top: 15px;
}
</style>
