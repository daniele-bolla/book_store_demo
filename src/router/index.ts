import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

export const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/top-books",
    name: "Top books",
    component: () =>
      import(/* webpackChunkName: "top-books" */ "../views/TopBooks.vue")
  },
  {
    path: "/books/:slug",
    name: "Book",
    component: () => import(/* webpackChunkName: "book" */ "../views/Book.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
