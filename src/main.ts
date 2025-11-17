import "@/app/styles/index.css";

import { createPinia } from "pinia";
import { createApp } from "vue";

import { App } from "@/app";
import { router } from "@/app/routes";
import { clickOutsideDirective } from "@/shared/directives";

const app = createApp(App);

app.directive("click-outside", clickOutsideDirective);

app.use(createPinia());
app.use(router);

app.mount("#app");
