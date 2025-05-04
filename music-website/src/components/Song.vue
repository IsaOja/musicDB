<template>
  <div class="song">
    <h2>{{ song.title }}</h2>
    <p><strong>Artist:</strong> {{ song.artist }}</p>
    <p><strong>Album:</strong> {{ song.album }}</p>
    <p><strong>Duration:</strong> {{ song.duration }}</p>
  </div>
</template>

<script>
export default {
  name: "Song",
  props: {
    song: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.song {
  border: 1px solid #ccc;
  padding: 1em;
  margin: 1em 0;
  border-radius: 8px;
  background-color: #f9f9f9;
}
</style>
