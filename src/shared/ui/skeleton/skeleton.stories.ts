import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { onMounted } from "vue";

import { Skeleton } from "./";

const meta = {
  component: Skeleton,
  tags: ["autodocs"],
  render: (args) => ({
    components: {
      Skeleton,
    },
    setup() {
      onMounted(() => setTimeout(() => Object.assign(args, { isLoading: false }), 2_000));

      return {
        args,
      };
    },
    template: `
      <Skeleton v-bind="args">
        <div style="width: 100%; height: 60px; border-radius: 12px; background-color: mistyrose" />
      </Skeleton>
    `,
  }),
  title: "Components/Skeleton",
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    isLoading: true,
  },
};
