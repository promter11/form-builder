<script setup lang="ts">
import { defineAsyncComponent, defineComponent, h } from "vue";

import { Skeleton } from "../skeleton";

import { cache } from "./cache";
import type { IconProps } from "./types";

const props = withDefaults(defineProps<IconProps>(), {
  isSpaced: false,
  size: "m",
});

const fetchIcon = async (name: string) => {
  const key = name.toLowerCase();

  if (cache.has(key)) {
    return cache.get(key) ?? "";
  }

  const response = await fetch(`/static/icons/${key.toLowerCase()}.svg`);

  if (!response.ok) {
    throw new Error(`Unable to fetch icon: ${key}`);
  }

  const content = await response.text();
  cache.set(key, content);
  return content;
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
