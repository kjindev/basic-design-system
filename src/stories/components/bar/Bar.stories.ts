import type { Meta, StoryObj } from "@storybook/react";
import Bar from "./Bar";

const meta = {
  title: "Components/Bar",
  component: Bar,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        // code: "<Button>Button</Button>",
      },
    },
  },
  tags: ["autodocs"],

  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} satisfies Meta<typeof Bar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    // label: "Button",
  },
};

export const WithIcons: Story = {
  args: {
    size: "large",
    // label: "Button",
  },
};
