<script setup>
import { createApp } from "vue";
import router from "./router.js";

const app = createApp({});
app.use(router);
app.mount("#app");
</script>

<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/albums" class="nav-link">Albums</router-link>
      <router-link to="/artists" class="nav-link">Artists</router-link>
      <router-link to="/songs" class="nav-link">Songs</router-link>
      <router-link to="/playlists" class="nav-link">Playlists</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
/* Navbar styles */
.navbar {
  display: flex;
  justify-content: center;
  background-color: #333;
  padding: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #007bff;
}

/* App styles */
#app {
  text-align: center;
}
</style>
