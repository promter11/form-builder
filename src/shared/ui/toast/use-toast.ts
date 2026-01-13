import { computed, onBeforeUnmount, watch } from "vue";

import type { ToastProps, ToastVariant } from "./types";

const iconsByVariant = {
  danger: "danger",
  success: "circle-check",
} as const satisfies Record<ToastVariant, string>;

export const useToast = (props: ToastProps, onClose: () => void) => {
  const iconByVariant = computed(() => iconsByVariant[props.variant ?? "success"]);

  let timeout: ReturnType<typeof setTimeout>;

  watch(
    () => props.value,
    (value) => {
      if (value) {
        timeout = setTimeout(onClose, props.duration);
      } else {
        clearTimeout(timeout);
      }
    }
  );

  onBeforeUnmount(() => clearTimeout(timeout));

  return {
    iconByVariant,
  };
};
