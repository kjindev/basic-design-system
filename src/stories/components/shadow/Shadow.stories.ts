import type { Meta, StoryObj } from "@storybook/react";
import { Shadow } from "./Shadow";

const meta = {
  title: "Components/Shadow",
  component: Shadow,
  parameters: {
    controls: { exclude: ["type"] },
    layout: "centered",
    componentSubtitle:
      "Shadow는 그림자 효과를 화면에 부여하여 시각적인 깊이를 제공하는 역할을 합니다.",
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
