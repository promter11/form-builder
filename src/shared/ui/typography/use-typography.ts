import { computed } from "vue";

import type { TypographyProps, TypographyTag, TypographyVariant } from "./types";

const tagsByVariant = {
  body: "p",
  subtitle: "h2",
  title: "h1",
} as const satisfies Record<TypographyVariant, TypographyTag>;

export const useTypography = (props: TypographyProps) => {
  const tag = computed(() => tagsByVariant[props.variant ?? "body"]);
  return {
    tag,
  };
};
