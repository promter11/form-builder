import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { Toast } from "./";

const meta = {
  argTypes: {
    value: {
      control: {
        type: "boolean",
      },
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["success"],
    },
  },
  component: Toast,
  render: (args) => ({
    components: {
      Toast,
    },
    setup() {
      const close = () => {
        Object.assign(args, { value: false });
      };

      return {
        args,
        close,
      };
    },
    template: `<Toast v-bind="args" @close="close" />`,
  }),
  title: "Components/Toast",
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: "Successfully created",
    value: true,
    variant: "success",
  },
};
