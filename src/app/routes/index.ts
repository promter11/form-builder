import { createRouter, createWebHistory } from "vue-router";

import { BuilderPage } from "@/pages/builder";
import { FormPage } from "@/pages/form";
import { PreviewPage } from "@/pages/preview";
import { SchemaPage } from "@/pages/schema";

const routes = [
  {
    component: FormPage,
    path: "/",
    children: [
      {
        component: BuilderPage,
        path: "builder",
      },
      {
        component: PreviewPage,
        path: "preview",
      },
      {
        component: SchemaPage,
        path: "schema",
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
