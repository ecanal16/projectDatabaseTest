import { createRouter, createWebHistory } from "vue-router";
import useAuth from "./composables/useAuth";

import Index from "./pages/index.vue";
import AddC from "./pages/addC.vue";
import Stats from "./pages/stats.vue";
import BuyAgain from "./pages/buyAgain.vue";
import Info from "./pages/info.vue";
import Login from "./pages/login.vue";
import PNF from "./pages/notFound.vue";

const { isAuthenticated } = useAuth();


const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    beforeEnter: (to, from, next) => {
      console.log(isAuthenticated);
      if (!isAuthenticated.value) {
        next("/login");
      }
      next();
    },
  },
  {
    path: "/addC",
    name: "AddC",
    component: AddC,
    beforeEnter: (to, from, next) => {
      console.log(isAuthenticated);
      if (!isAuthenticated.value) {
        next("/login");
      }
      next();
    },
  },
  {
    path: "/stats",
    name: "Stats",
    component: Stats,
    beforeEnter: (to, from, next) => {
      console.log(isAuthenticated);
      if (!isAuthenticated.value) {
        next("/login");
      }
      next();
    },
  },
  {
    path: "/buyAgain",
    name: "BuyAgain",
    component: BuyAgain,
    beforeEnter: (to, from, next) => {
      console.log(isAuthenticated);
      if (!isAuthenticated.value) {
        next("/login");
      }
      next();
    },
  },
  {
    path: "/info",
    name: "Info",
    component: Info,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PNF",
    component: PNF,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;