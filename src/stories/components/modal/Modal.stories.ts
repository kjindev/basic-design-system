import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    controls: { exclude: ["label", "type"] },
    layout: "centered",
    componentSubtitle:
      "Modal은 부가적인 설명을 추가할 때 사용하는 컴포넌트입니다.",
  },
  argTypes: {
    withIcon: {
      description: "Modal의 아이콘 유무를 결정합니다.",
      table: {
        defaultValue: { summary: false },
      },
      defaultValue: false,
    },

    withButton: {
      description: "Modal의 버튼 유무를 결정합니다.",
      table: {
        defaultValue: { summary: true },
      },
      defaultValue: true,
    },
  },
  args: {
    withIcon: false,
    withButton: true,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "Default",
  },
};

export const WithSelect: Story = {
  args: {
    type: "WithSelect",
  },
};

export const WithInput: Story = {
  args: {
    type: "WithInput",
  },
};
