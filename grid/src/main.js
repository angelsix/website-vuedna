import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// eslint-disable-next-line no-unused-vars
import DnaScrollDown from "./modules/dna.scrolldown.js";

import "normalize.css";

Vue.config.productionTip = false;

// Importing the global css file
//import "@/assets/global.css";

// Globally available components
import Grid from "@/components/core/layout/Grid.vue";
import Column from "@/components/core/layout/Column.vue";
import Section from "@/components/core/blocks/Section.vue";
import GradientUnderline from "@/components/core/elements/GradientUnderline.vue";
import TextImageSideBy from "@/components/core/elements/TextImageSideBy.vue";
import NavigationMenu from "@/components/core/navigation/NavigationMenu.vue";
import MenuList from "@/components/core/navigation/MenuList.vue";
import MenuListItem from "@/components/core/navigation/MenuListItem.vue";
import BlockCentered from "@/components/core/blocks/BlockCentered.vue";
import ShadowBox from "@/components/core/elements/ShadowBox.vue";
import Spacer from "@/components/core/elements/Spacer.vue";
import Accordian from "@/components/core/elements/Accordian.vue";
import AccordianItem from "@/components/core/elements/AccordianItem.vue";
import ImageTextButtonBox from "@/components/ImageTextButtonBox.vue";

Vue.component("Grid", Grid);
Vue.component("Column", Column);
Vue.component("Section", Section);
Vue.component("GradientUnderline", GradientUnderline);
Vue.component("TextImageSideBy", TextImageSideBy);
Vue.component("NavigationMenu", NavigationMenu);
Vue.component("MenuList", MenuList);
Vue.component("MenuListItem", MenuListItem);
Vue.component("BlockCentered", BlockCentered);
Vue.component("ShadowBox", ShadowBox);
Vue.component("Spacer", Spacer);
Vue.component("Accordian", Accordian);
Vue.component("AccordianItem", AccordianItem);
Vue.component("ImageTextButtonBox", ImageTextButtonBox);

new Vue({
	router,
	render: h => h(App)
}).$mount("#app");
