import Vue from "vue";
import VueRouter from "vue-router";
import Show from "../views/Show.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Show",
    component: Show
  },
  {
    path: "/details",
    name: "Details",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/Details.vue");
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
