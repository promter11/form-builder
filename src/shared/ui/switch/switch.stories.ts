import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { Switch } from "./";

const meta = {
  argTypes: {
    isChecked: {
      control: {
        type: "boolean",
      },
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    value: {
      control: {
        type: "text",
      },
    },
  },
  component: Switch,
  render: (args) => ({
    components: {
      Switch,
    },
    setup() {
      const change = (isChecked: boolean) => {
        Object.assign(args, { isChecked });
      };

      return {
        args,
        change,
      };
    },
    template: `<Switch v-bind="args" @change="change">Switch</Switch>`,
  }),
  title: "Components/Switch",
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    isChecked: true,
    isDisabled: false,
    value: "switch",
  },
};
