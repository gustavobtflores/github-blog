import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/index.vue";
import Post from "@/views/Post/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/post/:id",
      component: Post,
    },
  ],
});

export default router;
