import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

// const Home = () => import("@/pages/home");

const router = new Router({
  mode: "history",
  routes: [
    // {
    //   path: "/home",
    //   component: Home,
    //   name: "首页"
    // },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: Login,
    // },
    // {
    //   path: "/404",
    //   component: NullPage,
    //   name: "404"
    // },
    {
      path: "*"
      // redirect: "/basedata/drugDictionary",
    }
  ]
});

export default router;
