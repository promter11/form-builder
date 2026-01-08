import HomePage from "@/pages/home";
import { routeNames } from "@/shared/config";

export const routes = [
  {
    children: [
      {
        component: () => import("@/pages/builder"),
        name: routeNames.builder,
        path: "builder",
      },
      {
        component: () => import("@/pages/preview"),
        name: routeNames.preview,
        path: "preview",
      },
      {
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
