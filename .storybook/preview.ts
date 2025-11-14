import "@/app/styles/index.css";

import type { Preview } from "@storybook/vue3-vite";
import { setup } from "@storybook/vue3";

import { clickOutsideDirective } from "../src/shared/directives";

setup((app) => {
  app.directive("click-outside", clickOutsideDirective);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
