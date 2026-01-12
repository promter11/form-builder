import { createRouter, createWebHistory } from "vue-router";

import { redirectMiddleware } from "./middlewares";
import { routes } from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(redirectMiddleware);

export { router };
