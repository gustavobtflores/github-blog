import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBuilding,
  faChevronLeft,
  faUserGroup,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

library.add(
  faChevronLeft,
  faGithub,
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount("#app");
