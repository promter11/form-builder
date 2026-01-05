import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { Checkbox } from "./";

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
    name: {
      control: {
        type: "text",
      },
    },
    value: {
      control: {
        type: "text",
      },
    },
  },
  component: Checkbox,
  render: (args) => ({
    components: {
      Checkbox,
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
    template: `<Checkbox v-bind="args" @change="change">Checkbox</Checkbox>`,
  }),
  title: "Components/Checkbox",
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    isChecked: false,
    isDisabled: false,
    name: "check",
    value: "example",
  },
};
