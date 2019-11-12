import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import GridDemo from "./views/GridDemo.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/griddemo",
      name: "griddemo",
      component: GridDemo
    },
    // 404 page
    { path: "*", component: Home }
  ]
});
