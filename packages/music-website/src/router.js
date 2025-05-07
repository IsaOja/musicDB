import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import ArtistsViewMongo from "./views/ArtistsViewMongo.vue";
import ArtistsViewMySQL from "./views/ArtistsViewMySQL.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/home", component: HomeView },
  { path: "/mongoartists", component: ArtistsViewMongo },
  { path: "/mysqlartists", component: ArtistsViewMySQL },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
