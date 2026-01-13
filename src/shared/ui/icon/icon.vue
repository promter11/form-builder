<script setup lang="ts">
import { Skeleton } from "../skeleton";

import type { IconProps } from "./types";
import { useIcon } from "./use-icon";

const props = withDefaults(defineProps<IconProps>(), {
  isSpaced: false,
  size: "m",
});

const model = useIcon(props);
</script>

<template>
  <div :class="[$style.root, $style[`size-${size}`], isSpaced && $style.spaced]">
    <Suspense>
      <component :is="model.component" />
      <template #fallback>
        <Skeleton is-loading />
      </template>
    </Suspense>
  </div>
</template>

<style module lang="postcss">
.root {
  display: inline-flex;
  width: var(--width);
  height: var(--height);

  &.spaced {
    padding: var(--padding);
  }
}

.size-xs {
  --width: var(--size-icon-xs);
  --height: var(--size-icon-xs);
  --padding: var(--padding-icon-xs);
}

.size-s {
  --width: var(--size-icon-s);
  --height: var(--size-icon-s);
  --padding: var(--padding-icon-s);
}

.size-m {
  --width: var(--size-icon-m);
  --height: var(--size-icon-m);
  --padding: var(--padding-icon-m);
}
</style>
