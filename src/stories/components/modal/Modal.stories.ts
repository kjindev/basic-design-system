import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    controls: { exclude: ["label", "type"] },
    layout: "centered",
    componentSubtitle:
      "Modal은 사용자에게 추가 정보를 제공하는 컴포넌트입니다.",
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

    children: {
      description: "Modal의 내용입니다.",
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
    children: `The bird fights its way out of the egg. The egg is the world. Who would
    be born must first destroy a world.`,
  },
};
