import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/:type",
    name: "Type",

    component: () => import(/* webpackChunkName: "type" */ "../views/Type.vue"),
    props: true,
  },
  {
    path: "/:type/:id",
    name: "Detail",
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/Detail.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
