import { createApp } from "vue";
import App from "./App.vue";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Import Font Awesome CSS
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import Vue Router
import router from "./router";

createApp(App).use(router).mount("#app");