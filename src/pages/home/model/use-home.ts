import { nanoid } from "nanoid";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import { useFormStore } from "@/features/form";
import { routeNames } from "@/shared/config";
import type { Tab } from "@/shared/ui/tabs";

export const useHome = () => {
  const router = useRouter();
  const formStore = useFormStore();

  const tab = ref<string>(routeNames.builder);

  const tabItems = computed<Tab[]>(() => [
    {
      id: nanoid(),
      label: "Builder",
      value: routeNames.builder,
    },
    {
      id: nanoid(),
      isDisabled: formStore.fields.length === 0,
      label: "Preview",
      value: routeNames.preview,
    },
    {
      id: nanoid(),
      isDisabled: formStore.fields.length === 0,
      label: "JSON Schema",
      value: routeNames.schema,
    },
  ]);

  const changeTab = (value: string) => {
    tab.value = value;
  };

  const handleTab = (value: string) => {
    changeTab(value);
    router.push({ name: tab.value });
  };

  return {
    tab,
    tabItems,
    handleTab,
  };
};
