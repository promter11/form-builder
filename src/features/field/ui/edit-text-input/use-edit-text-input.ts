import type { TextSetting } from "@/entities/field";
import { debounce } from "@/shared/lib";

export const useEditTextInput = (onUpdate: (payload: Partial<TextSetting>) => void) => {
  const update = debounce(onUpdate, 250);
  return {
    update,
  };
};
