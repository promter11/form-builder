<script setup lang="ts">
import type { TypographyProps } from "./types";
import { useTypography } from "./use-typography";

const props = withDefaults(defineProps<TypographyProps>(), {
  variant: "body",
});

const model = useTypography(props);
</script>

<template>
  <component
    :is="model.tag.value"
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

.variant-title {
  @add-mixin text-title;
}
</style>
