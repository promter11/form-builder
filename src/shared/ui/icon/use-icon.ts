import { defineAsyncComponent, defineComponent, h } from "vue";

import { cache } from "./cache";
import type { IconProps } from "./types";

export const useIcon = (props: IconProps) => {
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

  const component = defineAsyncComponent(async () => {
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

  return {
    component,
  };
};
