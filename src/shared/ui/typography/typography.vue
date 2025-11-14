<script setup lang="ts">
import { computed } from "vue";

import type { TypographyTag, TypographyVariant } from "./types";

type Props = {
  variant?: TypographyVariant;
};

const props = withDefaults(defineProps<Props>(), {
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
  @add-mixin text-regular;
}

.variant-subtitle {
  @add-mixin text-strong;
}
</style>
