import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        code: "<Button>Button</Button>",
      },
    },
  },
  argTypes: {
    backgroundColor: {
      control: { type: "inline-radio" },
      options: ["#0D689E", "#A6C5E4"],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    backgroundColor: "#0D689E",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    backgroundColor: "#A6C5E4",
  },
};

export const WithIcons: Story = {
  args: {
    children: "Button",
    backgroundColor: "#A6C5E4",
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    backgroundColor: "#e6e6e6",
  },
};
