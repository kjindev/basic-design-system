import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta = {
  title: "Components/Link",
  component: Link,
  parameters: {
    controls: { exclude: ["type"] },
    layout: "centered",
    componentSubtitle:
      "Link는 다른 페이지로 이동하는 기능을 가진 글자의 스타일을 정의합니다.",
  },
  argTypes: {
    label: {
      description: "Link의 내용입니다.",
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Link is here",
  },
};
