import { createApp } from "vue";
import { createPinia } from "pinia";
import PhosphorVue from "phosphor-vue";
import "./assets/main.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(PhosphorVue);
app.use(createPinia());
app.use(router);

app.mount("#app");
