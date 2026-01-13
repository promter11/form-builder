import type { ComponentPublicInstance } from "vue";
import { computed, onMounted, ref, shallowRef } from "vue";

import type { TabsProps } from "./types";

export const useTabs = (props: TabsProps) => {
  const activeTabRect = ref<DOMRect>();
  const tabRefs = shallowRef(new Map<string, HTMLElement>());
  const rootRef = ref<HTMLDivElement>();

  const styles = computed(() => {
    if (!activeTabRect.value || !rootRef.value) {
      return undefined;
    }

    const rootRect = rootRef.value.getBoundingClientRect();

    return {
      left: `${activeTabRect.value.left - rootRect.left}px`,
      top: `${activeTabRect.value.bottom - rootRect.top}px`,
      width: `${activeTabRect.value.width}px`,
    };
  });

  const setActiveTabRect = (value: string) => {
    const tabRef = tabRefs.value.get(value);
    if (!tabRef) {
      return;
    }
    activeTabRect.value = tabRef.getBoundingClientRect();
  };

  const changeItem = (value: string) => {
    setActiveTabRect(value);
    return value;
  };

  const setTabRef = (element: Element | ComponentPublicInstance | null, value: string) => {
    if (element instanceof HTMLElement) {
      tabRefs.value.set(value, element);
    } else {
      tabRefs.value.delete(value);
    }
  };

  onMounted(() => setActiveTabRect(props.value));

  return {
    tabRefs,
    rootRef,
    styles,
    changeItem,
    setTabRef,
  };
};
