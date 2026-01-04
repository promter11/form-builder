import type { Ref } from "vue";
import { ref } from "vue";

export function useDragReorder<T>(list: Ref<T[]>) {
  const from = ref<number>();
  const to = ref<number>();

  const drop = (index: number) => {
    if (from.value === undefined || from.value === index) {
      return;
    }

    const item = list.value[from.value];

    if (!item) {
      return;
    }

    list.value.splice(from.value, 1);
    list.value.splice(index, 0, item);

    reset();
  };

  const over = (index: number) => {
    to.value = index;
  };

  const start = (index: number) => {
    from.value = index;
  };

  const reset = () => {
    from.value = undefined;
    to.value = undefined;
  };

  return {
    from,
    to,
    drop,
    over,
    start,
    reset,
  };
}
