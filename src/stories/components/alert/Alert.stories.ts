import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    controls: { exclude: ["type"] },
    layout: "centered",
    componentSubtitle: "Alert은 사용자에게 알림을 전달하는 컴포넌트입니다.",
  },
  argTypes: {
    withButton: {
      description: "Alert의 버튼 유무 결정합니다.",
      table: {
        defaultValue: { summary: false },
      },
      defaultValue: false,
    },
    label: {
      description: "Alert의 내용입니다.",
    },
  },
  args: {
    withButton: false,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "This is information alert.",
  },
};

export const Error: Story = {
  args: {
    label: "This is error alert.",
    type: "Error",
  },
};
