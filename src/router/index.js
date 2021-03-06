import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/destinations/:slug",
    name: "DestinationDetails",
    props: true,
    component: () => import(/* webpackChunkName: "destinationdetails" */ "../views/DestinationDetails.vue"),
    children: [
      {
        path: ":experienceSlug",
        name: "ExperienceDetails",
        props: true,
        component: () => import(/* webpackChunkName: "experiencedetails" */ "../views/ExperienceDetails.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
