import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
} from "vue-router";
import { route_names } from "@/consts";
import MainPage from "@/pages/MainPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: route_names.main,
      component: MainPage,
      meta: {
        title: "Reminders",
        requiresAuth: true,
      },
    },
  ],
});

// router.beforeEach(
//   async (to: RouteLocationNormalized, from: RouteLocationNormalized, next) => {
//     document.title = (to.meta.title as string) || "";
//
//     await useUserStore().refreshUser();
//     const loggedIn = useUserStore().isAuth;
//
//     if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
//       next(route_names.login);
//     } else {
//       next();
//     }
//
//     return true;
//   },
// );

export default router;
