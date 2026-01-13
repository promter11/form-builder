<script setup lang="ts">
import { defineAsyncComponent } from "vue";

import { Skeleton } from "@/shared/ui/skeleton";

const BuilderPage = defineAsyncComponent(() => import("./builder.vue"));
</script>

<template>
  <Suspense>
    <template #default>
      <BuilderPage />
    </template>
    <template #fallback>
      <Skeleton
        :height="93"
        is-loading
      />
    </template>
  </Suspense>
</template>
