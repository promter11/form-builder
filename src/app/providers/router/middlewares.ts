import type { NavigationGuard } from "vue-router";

export const redirectMiddleware: NavigationGuard = (to, from, next) => {
  if (to.path !== "/" && from.name === null) {
    next("/");
  } else {
    next();
  }
};
