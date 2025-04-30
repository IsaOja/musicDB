import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AlbumsView from "./views/AlbumsView.vue";
import ArtistsView from "./views/ArtistsView.vue";
import PlaylistsView from "./views/PlaylistsView.vue";
import SongsView from "./views/SongsView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/home", component: HomeView },
  { path: "/albums", component: AlbumsView },
  { path: "/artists", component: ArtistsView },
  { path: "/playlists", component: PlaylistsView },
  { path: "/songs", component: SongsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
