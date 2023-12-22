import { css } from "@emotion/react";

interface Props {
  type: string;
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
}

const getTypeStyle = (type: string) => {
  if (type === "Disabled") {
    return {
      backgroundColor: "#e6e6e6",
      color: "#8a8a8a",
    };
  } else {
    return {
      backgroundColor: "#0D689E",
      color: "white",
    };
  }
};

export const Button = ({ type, children }: Props) => {
  return (
    <button
      css={css({
        backgroundColor: getTypeStyle(type).backgroundColor,
        color: getTypeStyle(type).color,
        border: "none",
        borderRadius: "10px",
        fontSize: "14px",
        padding: "10px 14px",
        cursor: "pointer",
        fontFamily: "Noto Sans KR",
        fontWeight: "300",
      })}
    >
      {children}
    </button>
  );
};
