<script setup lang="ts">
import { Divider } from "@/shared/ui/divider";
import { Tabs } from "@/shared/ui/tabs";

import { useHome } from "../model";

const model = useHome();
</script>

<template>
  <div :class="$style.root">
    <div :class="$style.container">
      <Tabs
        :items="model.tabItems.value"
        :value="model.tab.value"
        @change="model.handleTab"
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

.container {
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
}
</style>
