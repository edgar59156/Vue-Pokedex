import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "about" */ "@/views/Home.vue"),
  },
  {
    path: "/:id",
    name: "pokemon-details",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/PokemonDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
