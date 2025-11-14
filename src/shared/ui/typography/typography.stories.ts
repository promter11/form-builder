import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { Typography } from "./";

const meta = {
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["body", "subtitle"],
    },
  },
  component: Typography,
  render: (args) => ({
    components: {
      Typography,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<Typography v-bind="args">Typography</Typography>`,
  }),
  title: "Components/Typography",
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: "body",
  },
};
