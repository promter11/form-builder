import type { Ref } from "vue";

export type ToastEmits = {
  close: [];
};
export type ToastInjection = {
  data: Ref<ToastProps | undefined>;
  actions: {
    close: () => void;
    create: (payload: ToastProps) => void;
  };
};
export type ToastProps = {
  title?: string;
  value?: boolean;
  variant?: ToastVariant;
};
export type ToastVariant = "success";
