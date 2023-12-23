import { css } from "@emotion/react";
import { ReactComponent as Svg } from "../../assets/addCircle.svg";
interface Props {
  type?: string;
  isDestructive?: boolean;
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
}

export const Button = ({ type, size, isDestructive, children }: Props) => {
  const fontSize = {
    small: 12,
    medium: 14,
    large: 18,
  };

  const style = {
    display: "flex",
    alignItems: "center",
    border: "none",
    fontSize: fontSize[size || "medium"],
    cursor: "pointer",
    fontFamily: "Noto Sans KR",
    fontWeight: "400",
    "& span": {
      marginBottom: "1px",
    },
  };
  if (type === "Subtle") {
    return (
      <button
        css={css(style, {
          backgroundColor: isDestructive ? "#e6e6e6" : "#BAD5E8",
          color: isDestructive ? "#8a8a8a" : "#0D689E",
          padding: `${fontSize[size || "medium"]}px ${
            fontSize[size || "medium"] * 2
          }px`,
          borderRadius: fontSize[size || "medium"],
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
          padding: `${fontSize[size || "medium"]}px ${
            fontSize[size || "medium"] * 2
          }px`,
          borderRadius: fontSize[size || "medium"],
          "& svg": {
            marginRight: "7px",
          },
          "& span": {
            // marginBottom: "2px",
            paddingRight: "6px",
          },
        })}
      >
        <Svg
          width={fontSize[size || "medium"] * 1.2}
          height={fontSize[size || "medium"] * 1.2}
          fill={isDestructive ? "#8a8a8a" : "white"}
        />
        <span>{children}</span>
      </button>
    );
  } else if (type === "IconOnly") {
    return (
      <button
        css={css(style, {
          backgroundColor: isDestructive ? "#e6e6e6" : "#0D689E",
          color: isDestructive ? "#8a8a8a" : "white",
          padding: fontSize[size || "medium"] / 1.5,
          borderRadius: fontSize[size || "medium"] * 2,
        })}
      >
        <Svg
          width={fontSize[size || "medium"] * 1.5}
          height={fontSize[size || "medium"] * 1.5}
          fill={isDestructive ? "#8a8a8a" : "white"}
        />
      </button>
    );
  } else {
    return (
      <button
        css={css(style, {
          backgroundColor: isDestructive ? "#e6e6e6" : "#0D689E",
          color: isDestructive ? "#8a8a8a" : "white",
          padding: `${fontSize[size || "medium"]}px ${
            fontSize[size || "medium"] * 2
          }px`,
          borderRadius: fontSize[size || "medium"],
        })}
      >
        <span>{children}</span>
      </button>
    );
  }
};
