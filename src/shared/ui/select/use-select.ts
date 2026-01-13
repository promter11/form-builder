import { computed, ref } from "vue";

import type { SelectProps } from "./types";

export const useSelect = (props: SelectProps) => {
  const isExpanded = ref(false);

  const currentItem = computed(() => props.items.find((item) => item.value === props.value));

  const changeExpanded = (value: boolean) => {
    isExpanded.value = value;
  };

  const handleChange = (value: string) => {
    changeExpanded(false);
    return value;
  };

  const handleClickOutside = () => changeExpanded(false);

  return {
    isExpanded,
    currentItem,
    changeExpanded,
    handleChange,
    handleClickOutside,
  };
};
