import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// eslint-disable-next-line no-unused-vars
import DnaScrollDown from "./modules/dna.scrolldown.js";

Vue.config.productionTip = false;

// Importing the global css file
//import "@/assets/global.css";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
