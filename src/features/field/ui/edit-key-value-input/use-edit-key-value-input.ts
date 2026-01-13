import { nanoid } from "nanoid";

import type { KeyValueInputSetting } from "@/entities/field";
import { debounce } from "@/shared/lib";
import type { KeyValueInputItem } from "@/shared/ui/key-value-input";

import type { EditKeyValueInputProps } from "./types";

export const useEditKeyValueInput = (
  props: EditKeyValueInputProps,
  onUpdate: (payload: Partial<KeyValueInputSetting>) => void
) => {
  const update = debounce(onUpdate, 250);

  const addItem = () =>
    onUpdate({
      items: [
        ...props.setting.items,
        {
          id: nanoid(),
          key: "",
          value: "",
        },
      ],
    });

  const changeItem = (index: number, payload: Partial<KeyValueInputItem>) => {
    if (!props.setting.items[index]) {
      return;
    }

    update({
      items: [
        ...props.setting.items.slice(0, index),
        { ...props.setting.items[index], ...payload },
        ...props.setting.items.slice(index + 1),
      ],
    });
  };

  const removeItem = (index: number) =>
    onUpdate({
      items: [...props.setting.items.slice(0, index), ...props.setting.items.slice(index + 1)],
    });

  return {
    addItem,
    changeItem,
    removeItem,
  };
};
