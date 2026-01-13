import HomePage from "@/pages/home";
import { routeNames } from "@/shared/config";

import { redirectMiddleware } from "./middlewares";

export const routes = [
  {
    children: [
      {
        path: "",
        redirect: {
          name: routeNames.builder,
        },
      },
      {
        component: () => import("@/pages/builder"),
        name: routeNames.builder,
        path: "builder",
      },
      {
        beforeEnter: [redirectMiddleware],
        component: () => import("@/pages/preview"),
        name: routeNames.preview,
        path: "preview",
      },
      {
        beforeEnter: [redirectMiddleware],
        component: () => import("@/pages/schema"),
        name: routeNames.schema,
        path: "schema",
      },
    ],
    component: HomePage,
    path: "/",
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];
