import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS
import "./style.css"; // Your custom styles
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
