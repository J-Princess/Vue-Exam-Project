import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/repos",
      name: "repos",
      component: () => import("../views/ReposView.vue"),
    },
    {
      name: "Repo",
      path: "/repos/:id",
      component: () => import("../views/Repo.vue"),
    },
    {
      path: "/:catchAll(.*)*",
      name: "PageNotFound",
      component: () => import("../views/PageNotFound.vue"),
    },
  ],
});

export default router;
