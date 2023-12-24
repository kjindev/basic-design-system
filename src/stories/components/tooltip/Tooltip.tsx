import { css } from "@emotion/react";
import React, { useState } from "react";
interface Props {
  label?: string;
  type?: string;
}

export const Tooltip = ({ label, type }: Props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      css={css({
        width: 300,
        height: 100,
        fontSize: 14,
        fontFamily: "Noto Sans KR",
        fontWeight: "400",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        "& .test": { cursor: "default" },
        "& .tooltip-hidden": {
          display: "none",
        },
        "& .tooltip": {
          position: "absolute",
          transform: "translate(60%, -80%)",
          fontSize: 12,
          backgroundColor: type === "DarkMode" ? "#0D689E" : "#BAD5E8",
          color: type === "DarkMode" ? "white" : "#0D689E",
          padding: "10px 12px",
          borderRadius: 12,
        },
      })}
    >
      <div
        className="test"
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        Test Component
      </div>
      <div className={isHover ? "tooltip" : "tooltip-hidden"}>{label}</div>
    </div>
  );
};