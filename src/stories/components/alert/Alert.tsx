import { css } from "@emotion/react";
import React from "react";
interface Props {
  type?: string;
  label?: string;
  withButton?: boolean;
}

export const Alert = ({ type, withButton, label }: Props) => {
  const style = {
    width: "300px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "none",
    fontSize: 14,
    padding: 14,
    borderRadius: 14,
    fontFamily: "Noto Sans KR",
    fontWeight: "400",
    "&:hover": {
      // transform: "scale(1.05)",
    },
  };

  if (type === "Error") {
    return (
      <div css={css(style, { backgroundColor: "#fcc6c5", color: "#ff5a57" })}>
        {label}
        {withButton && <div>X</div>}
      </div>
    );
  } else {
    return (
      <div css={css(style, { backgroundColor: "#BAD5E8", color: "#0D689E" })}>
        {label}
        {withButton && <div>X</div>}
      </div>
    );
  }
};
