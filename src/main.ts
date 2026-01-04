import "@/app/styles/index.css";

import { nanoid } from "nanoid";
import { createPinia } from "pinia";
import { createApp, ref } from "vue";

import { App } from "@/app";
import { router } from "@/app/routes";
import { clickOutsideDirective } from "@/shared/directives";
import { toastKey } from "@/shared/ui";
import type { ToastProps } from "@/shared/ui";

const app = createApp(App);

const toast = ref<ToastProps>();

app.directive("click-outside", clickOutsideDirective);

app.provide(toastKey, {
  actions: {
    close: () => {
      toast.value = undefined;
    },
    create: (payload: ToastProps) => {
      toast.value = {
        ...payload,
        id: nanoid(),
        value: true,
      };
    },
  },
  data: toast,
});

app.use(createPinia());
app.use(router);

app.mount("#app");
