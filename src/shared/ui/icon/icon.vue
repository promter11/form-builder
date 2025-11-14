<script setup lang="ts">
import { defineAsyncComponent, defineComponent, h } from "vue";

import { Skeleton } from "../";

import type { IconProps } from "./types";

const props = withDefaults(defineProps<IconProps>(), {
  isSpaced: true,
  size: "m",
});

const fetchIcon = async (name: string) => {
  const response = await fetch(`/static/icons/${name.toLowerCase()}.svg`);

  if (!response.ok) {
    throw new Error(`Unable to fetch icon: ${name}`);
  }

  return await response.text();
};

const getSvgElement = (content: string) => {
  const div = document.createElement("div");
  div.innerHTML = content.trim();
  return div.firstElementChild as SVGElement;
};

const icon = defineAsyncComponent(async () => {
  const svgContent = await fetchIcon(props.name);
  const svgElement = getSvgElement(svgContent);
  return defineComponent({
    name: `SvgIcon:${props.name}`,
    setup() {
      return () =>
        h("svg", {
          ...Array.from(svgElement.attributes).reduce(
            (acc, attribute) => ({
              ...acc,
              [attribute.name]: attribute.value,
            }),
            {}
          ),
          innerHTML: svgElement.innerHTML,
        });
    },
  });
});
</script>

<template>
  <div :class="[$style.root, $style[`size-${size}`], isSpaced && $style.spaced]">
    <Suspense>
      <component :is="icon" />
      <template #fallback>
        <Skeleton is-loading />
      </template>
    </Suspense>
  </div>
</template>

<style module lang="postcss">
.root {
  width: var(--width);
  height: var(--height);

  &.spaced {
    padding: var(--padding);
  }
}

.size-xs {
  --width: 16px;
  --height: 16px;
  --padding: 2px;
}

.size-s {
  --width: 24px;
  --height: 24px;
  --padding: 2px;
}

.size-m {
  --width: 32px;
  --height: 32px;
  --padding: 4px;
}
</style>
