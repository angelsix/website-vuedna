import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import ConstitutionandByeLaws from "./views/ConstitutionandByeLaws.vue";
import OurMissionStatement from "./views/OurMissionStatement.vue";
import OurCommitteeMembers from "./views/OurCommitteeMembers.vue";
import BecomeAMember from "./views/BecomeAMember.vue";
import NextAGM from "./views/NextAGM.vue";
import AssociationShop from "./views/AssociationShop.vue";
import Jimmys from "./views/Jimmys.vue";
import Events from "./views/Events.vue";
import Gallery from "./views/Gallery.vue";
import AssociationStandard from "./views/AssociationStandard.vue";
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
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/constitutionandbyelaws",
      name: "constitutionandbyelaws",
      component: ConstitutionandByeLaws
    },
    {
      path: "/ourmissionstatement",
      name: "ourmissionstatement",
      component: OurMissionStatement
    },
    {
      path: "/ourcommitteemembers",
      name: "ourcommitteemembers",
      component: OurCommitteeMembers
    },
    {
      path: "/becomeamember",
      name: "becomeamember",
      component: BecomeAMember
    },
    {
      path: "/nextagm",
      name: "nextagm",
      component: NextAGM
    },
    {
      path: "/associationshop",
      name: "associationshop",
      component: AssociationShop
    },
    {
      path: "/jimmys",
      name: "jimmys",
      component: Jimmys
    },
    {
      path: "/events",
      name: "events",
      component: Events
    },
    {
      path: "/gallery",
      name: "gallery",
      component: Gallery
    },
    {
      path: "/associationstandard",
      name: "associationstandard",
      component: AssociationStandard
    },
    {
      path: "/nav",
      name: "navigation",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "navigation" */ "./views/Navigation.vue")
    },
    // 404 page
    { path: "*", component: Home }
  ]
});
