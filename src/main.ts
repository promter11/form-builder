import "@/app/styles/index.css";

import { nanoid } from "nanoid";
import { createApp, ref } from "vue";

import { App, router, store } from "@/app";
import { clickOutsideDirective } from "@/shared/directives";
import type { ToastProps } from "@/shared/ui/toast";
import { toastKey } from "@/shared/ui/toast";

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

app.use(store);
app.use(router);

app.mount("#app");
