<template>
  <div class="container">
    <!-- Artister -->
    <section class="form-section">
      <h2>Artister</h2>
      <input v-model="newArtistNamn" placeholder="Artistnamn" />
      <input v-model="newArtistInfo" placeholder="Artistinfo" />
      <button @click="addArtist">Lägg till artist</button>

      <ul>
        <li v-for="(artist, index) in artists" :key="index">
          {{ artist.namn }} – {{ artist.info }}
          <button @click="removeArtist(index)">🗑 Ta bort</button>
          <button @click="editArtist(index)">✏ Redigera</button>
        </li>
      </ul>
    </section>

    <!-- Album -->
    <section class="form-section">
      <h2>Album</h2>
      <input v-model="newAlbumTitel" placeholder="Albumtitel" />
      <input v-model="newAlbumArtistID" placeholder="ArtistID" />
      <input v-model="newUtgivningsår" placeholder="Utgivningsår" />
      <button @click="addAlbum">Lägg till album</button>

      <ul>
        <li v-for="(album, index) in albums" :key="index">
          {{ album.titel }} – ArtistID: {{ album.artistID }} – {{ album.utgivningsår }}
          <button @click="removeAlbum(index)">🗑 Ta bort</button>
          <button @click="editAlbum(index)">✏ Redigera</button>
        </li>
      </ul>
    </section>

    <!-- Låtar -->
    <section class="form-section">
      <h2>Låtar</h2>
      <input v-model="newLåtTitel" placeholder="Låttitel" />
      <input v-model="newAlbumID" placeholder="AlbumID" />
      <input v-model="newSpårnummer" placeholder="Spårnummer" />
      <input v-model="newLängd" placeholder="Längd" />
      <button @click="addLåt">Lägg till låt</button>

      <ul>
        <li v-for="(låt, index) in låtar" :key="index">
          {{ låt.titel }} – AlbumID: {{ låt.albumID }}, Spår: {{ låt.spårnummer }}, {{ låt.längd }}
          <button @click="removeLåt(index)">🗑 Ta bort</button>
          <button @click="editLåt(index)">✏ Redigera</button>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// ARTISTER
const newArtistNamn = ref('')
const newArtistInfo = ref('')
const artists = ref([])

function addArtist() {
  if (newArtistNamn.value && newArtistInfo.value) {
    artists.value.push({ namn: newArtistNamn.value, info: newArtistInfo.value })
    newArtistNamn.value = ''
    newArtistInfo.value = ''
  }
}
function removeArtist(index) {
  artists.value.splice(index, 1)
}
function editArtist(index) {
  const artist = artists.value[index]
  newArtistNamn.value = artist.namn
  newArtistInfo.value = artist.info
  removeArtist(index)
}

// ALBUM
const newAlbumTitel = ref('')
const newAlbumArtistID = ref('')
const newUtgivningsår = ref('')
const albums = ref([])

function addAlbum() {
  if (newAlbumTitel.value && newAlbumArtistID.value && newUtgivningsår.value) {
    albums.value.push({
      titel: newAlbumTitel.value,
      artistID: newAlbumArtistID.value,
      utgivningsår: newUtgivningsår.value,
    })
    newAlbumTitel.value = ''
    newAlbumArtistID.value = ''
    newUtgivningsår.value = ''
  }
}
function removeAlbum(index) {
  albums.value.splice(index, 1)
}
function editAlbum(index) {
  const album = albums.value[index]
  newAlbumTitel.value = album.titel
  newAlbumArtistID.value = album.artistID
  newUtgivningsår.value = album.utgivningsår
  removeAlbum(index)
}

// LÅTAR
const newLåtTitel = ref('')
const newAlbumID = ref('')
const newSpårnummer = ref('')
const newLängd = ref('')
const låtar = ref([])

function addLåt() {
  if (newLåtTitel.value && newAlbumID.value && newSpårnummer.value && newLängd.value) {
    låtar.value.push({
      titel: newLåtTitel.value,
      albumID: newAlbumID.value,
      spårnummer: newSpårnummer.value,
      längd: newLängd.value,
    })
    newLåtTitel.value = ''
    newAlbumID.value = ''
    newSpårnummer.value = ''
    newLängd.value = ''
  }
}
function removeLåt(index) {
  låtar.value.splice(index, 1)
}
function editLåt(index) {
  const låt = låtar.value[index]
  newLåtTitel.value = låt.titel
  newAlbumID.value = låt.albumID
  newSpårnummer.value = låt.spårnummer
  newLängd.value = låt.längd
  removeLåt(index)
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

.form-section {
  background-color: #f4f4f4;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 8px;
}

input {
  display: block;
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.4rem;
  font-size: 1rem;
}

button {
  margin-right: 0.5rem;
  margin-top: 0.3rem;
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: white;
  margin: 0.3rem 0;
  padding: 0.6rem;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
