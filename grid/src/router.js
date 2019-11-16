import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Faq from "./views/Faq.vue";
import GridDemo from "./views/GridDemo.vue";

Vue.use(Router);

// Website title
var title = "A Chimney Sweep";

var router = new Router({
  mode: "history",
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: { title: 'About' }
    },
    {
      path: "/faq",
      name: "faq",
      component: Faq,
      meta: { title: 'Frequently asked questions' }
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

// Set title of page on load
router.beforeEach((to, from, next) => {

  // Add site title to end of page title
  var pageTitle = to.meta.title ? to.meta.title + ' - ' : '';

  document.title = pageTitle + title;

  next();
});

export default router; 