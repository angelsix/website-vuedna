import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// Importing the global css file
//import "@/assets/global.css";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
