import { createMemoryHistory, createRouter } from "vue-router";

import { BuildPage } from "@/pages/form";

const routes = [
  {
    component: BuildPage,
    path: "/",
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
