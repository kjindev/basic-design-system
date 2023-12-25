import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta = {
  title: "Components/Link",
  component: Link,
  parameters: {
    controls: { exclude: ["type"] },
    layout: "centered",
    componentSubtitle:
      "Link는 사용자를 다른 페이지로 이동하거나 외부 리소스로 연결하는데 사용되는 하이퍼링크를 생성하는 역할을 하는 컴포넌트입니다.",
  },
  argTypes: {
    children: {
      description: "Link의 내용입니다.",
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Link is here",
  },
};
