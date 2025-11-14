<script setup lang="ts">
import { defineAsyncComponent, defineComponent, h } from "vue";

import { Skeleton } from "@/shared/ui";

import type { IconSize } from "./types";

type Props = {
  size?: IconSize;
  name: string;
};

const props = withDefaults(defineProps<Props>(), {
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
  <div :class="[$style.root, $style[`size-${size}`]]">
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
  padding: var(--padding);
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
