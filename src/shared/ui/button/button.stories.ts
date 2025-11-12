import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { Button } from "./";

const meta = {
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["neutral", "primary"],
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["bordered", "solid"],
    },
  },
  component: Button,
  render: (args) => ({
    components: {
      Button,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<Button v-bind="args">Button</Button>`,
  }),
  title: "Components/Button",
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    color: "primary",
    variant: "solid",
  },
};
