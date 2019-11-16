import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Faq from "./views/Faq.vue";
import Testimonials from "./views/Testimonials.vue";
import GridDemo from "./views/GridDemo.vue";

import DnaScrollDown from "@/modules/dna.scrolldown.js";

Vue.use(Router);

// Website title
var title = "A Chimney Sweep";

var router = new Router({
	mode: "history",
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	},
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/about",
			name: "about",
			component: About,
			meta: { title: "About" }
		},
		{
			path: "/faq",
			name: "faq",
			component: Faq,
			meta: { title: "Frequently asked questions" }
		},
		{
			path: "/testimonials",
			name: "testimonials",
			component: Testimonials,
			meta: { title: "Testimonials" }
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
router.afterEach(() => {
	// Bit hackish way to wait for page to mount then hook into the new UI
	// Works for now and saves having to run this on ever pages mounted/unmounted
	setTimeout(() => {
		DnaScrollDown.Unhook();
		DnaScrollDown.Hook();
	}, 200);
});

router.beforeEach((to, from, next) => {
	// Add site title to end of page title
	var pageTitle = to.meta.title ? to.meta.title + " - " : "";

	document.title = pageTitle + title;

	next();
});

export default router;
