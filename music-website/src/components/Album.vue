<template>
  <div class="album">
    <img :src="album.coverImage" alt="Album Cover" class="album-cover" />
    <h2 class="album-title">{{ album.title }}</h2>
    <h3 class="album-artist">{{ album.artist }}</h3>
    <ul class="track-list">
      <li v-for="(track, index) in album.tracks" :key="index" class="track">
        {{ track.title }} - {{ track.duration }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Album",
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.album {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  text-align: center;
}

.album-cover {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.album-title {
  font-size: 1.5em;
  margin: 8px 0;
}

.album-artist {
  font-size: 1.2em;
  color: #666;
}

.track-list {
  list-style-type: none;
  padding: 0;
}

.track {
  margin: 4px 0;
}
</style>
