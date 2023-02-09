import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

import { register as registerNotifications  } from "../ndl-notifications";

registerNotifications();

createApp(App).mount("#app");
