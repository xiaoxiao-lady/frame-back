import Vue from "vue";
import "@/style/reset.less";
import router from "@/router/index";
// import store from "@/store/index";
import App from "@/app";
import "babel-polyfill";

export default new Vue({
  el: "#app",
  router,
  // store,
  render: h => h(App)
});
