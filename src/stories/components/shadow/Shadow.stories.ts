import type { Meta, StoryObj } from "@storybook/react";
import { Shadow } from "./Shadow";

const meta = {
  title: "Components/Shadow",
  component: Shadow,
  parameters: {
    controls: { exclude: ["type"] },
    layout: "centered",
    componentSubtitle: "Shadow는 컴포넌트의 그림자 깊이를 결정합니다.",
  },
  argTypes: {
    colored: {
      description: "Shadow의 색상 유무를 결정합니다.",
      table: {
        defaultValue: { summary: false },
      },
      defaultValue: false,
    },
  },
  args: {
    colored: false,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Shadow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // label: "This is information Shadow.",
  },
};

export const Large: Story = {
  args: {
    // label: "This is error Shadow.",
    type: "Large",
  },
};
