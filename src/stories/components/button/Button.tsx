import { css } from "@emotion/react";
import icon from "../../assets/addCircle.svg";
interface Props {
  type?: string;
  isDestructive?: boolean;
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
}

export const Button = ({ type, isDestructive, children }: Props) => {
  const style = {
    display: "flex",
    alignItems: "center",
    border: "none",
    fontSize: "14px",
    cursor: "pointer",
    fontFamily: "Noto Sans KR",
    fontWeight: "400",
    "& span": {
      marginBottom: "1px",
      paddingRight: type === "WithIcon" ? "6px" : "",
    },
  };
  if (type === "Subtle") {
    return (
      <button
        css={css(style, {
          backgroundColor: isDestructive ? "#e6e6e6" : "#BAD5E8",
          color: isDestructive ? "#8a8a8a" : "#0D689E",
          padding: "10px 24px",
          borderRadius: "10px",
        })}
      >
        <span>{children}</span>
      </button>
    );
  } else if (type === "WithIcon") {
    return (
      <button
        css={css(style, {
          backgroundColor: isDestructive ? "#e6e6e6" : "#0D689E",
          color: isDestructive ? "#8a8a8a" : "white",
          padding: "10px 24px",
          borderRadius: "10px",
          "& img": {
            marginRight: "7px",
          },
        })}
      >
        <img src={icon} alt="icon" />
        <span>{children}</span>
      </button>
    );
  } else if (type === "IconOnly") {
    return (
      <button
        css={css(style, {
          backgroundColor: isDestructive ? "#e6e6e6" : "#0D689E",
          color: isDestructive ? "#8a8a8a" : "white",
          padding: "10px 12px",
          borderRadius: "24px",
        })}
      >
        <img src={icon} alt="icon" />
      </button>
    );
  } else {
    return (
      <button
        css={css(style, {
          backgroundColor: isDestructive ? "#e6e6e6" : "#0D689E",
          color: isDestructive ? "#8a8a8a" : "white",
          padding: "10px 24px",
          borderRadius: "10px",
        })}
      >
        <span>{children}</span>
      </button>
    );
  }
};
