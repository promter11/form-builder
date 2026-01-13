import { useRipple } from "../../composables";

import type { ButtonProps } from "./types";

export const useButton = (props: ButtonProps) => {
  const ripple = useRipple();

  const click = (event: MouseEvent) => {
    if (props.variant === "plain") {
      return;
    }

    ripple.trigger(event);
  };

  return {
    ripple,
    click,
  };
};
