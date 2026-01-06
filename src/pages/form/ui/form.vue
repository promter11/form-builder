<script setup lang="ts">
import { nanoid } from "nanoid";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import { useFormStore } from "@/features/form";
import { Divider, type Tab } from "@/shared/ui";
import { Tabs } from "@/shared/ui";

const router = useRouter();
const formStore = useFormStore();

const tab = ref("builder");

const tabItems = computed<Tab[]>(() => [
  {
    id: nanoid(),
    label: "Builder",
    value: "builder",
  },
  {
    id: nanoid(),
    isDisabled: formStore.fields.length === 0,
    label: "Preview",
    value: "preview",
  },
  {
    id: nanoid(),
    isDisabled: formStore.fields.length === 0,
    label: "JSON Schema",
    value: "schema",
  },
]);

const changeTab = (value: string) => {
  tab.value = value;
};

const handleTab = (value: string) => {
  changeTab(value);
  router.push({ path: tab.value });
};
</script>

<template>
  <div :class="$style.root">
    <div>
      <Tabs
        :items="tabItems"
        :value="tab"
        @change="handleTab"
      />
      <Divider />
    </div>
    <RouterView />
  </div>
</template>

<style module lang="postcss">
.root {
  display: flex;
  flex-direction: column;
  gap: var(--gap-container);
}
</style>
