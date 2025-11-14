import "@/app/styles/index.css";

import { createApp } from "vue";

import { App } from "@/app";
import { clickOutsideDirective } from "@/shared/directives";

const app = createApp(App);

app.directive("click-outside", clickOutsideDirective);

app.mount("#app");
