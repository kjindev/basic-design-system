import type { Meta, StoryObj } from "@storybook/react";
import Shape from "./Shape";

const meta = {
  title: "Components/Shape",
  component: Shape,
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
} satisfies Meta<typeof Shape>;

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
