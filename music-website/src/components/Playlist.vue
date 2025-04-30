<template>
  <div class="playlist">
    <h2>{{ playlistName }}</h2>
    <ul>
      <li v-for="song in songs" :key="song.id">
        {{ song.title }} - {{ song.artist }} ({{ song.duration }})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Playlist',
  props: {
    playlistName: {
      type: String,
      required: true
    },
    songs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.playlist {
  margin: 20px;
}

.playlist h2 {
  font-size: 1.5em;
}

.playlist ul {
  list-style-type: none;
  padding: 0;
}

.playlist li {
  margin: 5px 0;
}
</style>