<script setup lang="ts">
import { computed } from "vue";

import type { TypographyProps, TypographyTag, TypographyVariant } from "./types";

const props = withDefaults(defineProps<TypographyProps>(), {
  variant: "body",
});

const tagsByVariant = {
  body: "p",
  subtitle: "h2",
} as const satisfies Record<TypographyVariant, TypographyTag>;

const tag = computed(() => tagsByVariant[props.variant]);
</script>

<template>
  <component
    :is="tag"
    :class="[$style[`variant-${variant}`]]"
  >
    <slot />
  </component>
</template>

<style module lang="postcss">
.variant-body {
  @add-mixin text-body;
}

.variant-subtitle {
  @add-mixin text-subtitle;
}
</style>
