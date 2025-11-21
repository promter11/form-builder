import type { InjectionKey } from "vue";
import { inject } from "vue";

import type { ToastInjection } from "./types";

export const toastKey: InjectionKey<ToastInjection> = Symbol("toast");

export const useToast = () => inject<ToastInjection>(toastKey);
