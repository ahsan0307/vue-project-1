import { createRouter, createWebHistory } from "vue-router";
import ResultList from "../views/ResultList.vue";
import ResultDetails from "../views/ResultDetails.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "ResultList",
    component: ResultList
  },
  {
    path: "/result/101",
    name: "ResultDetails",
    component: ResultDetails
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
