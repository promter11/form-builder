import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { Chip } from "./";

const meta = {
  argTypes: {
    isClosable: {
      control: {
        type: "boolean",
      },
    },
  },
  component: Chip,
  render: (args) => ({
    components: {
      Chip,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<Chip v-bind="args">Chip</Chip>`,
  }),
  title: "Components/Chip",
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    isClosable: false,
  },
};
