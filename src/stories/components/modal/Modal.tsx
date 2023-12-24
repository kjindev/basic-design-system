import { css } from "@emotion/react";
import { ReactComponent as Svg } from "../../assets/info.svg";
import { mainColor } from "../../../util/constant";
import React from "react";

interface Props {
  label?: string;
  type?: string;
  withIcon?: boolean;
  withButton?: boolean;
}

export const Modal = ({ type, withIcon, withButton }: Props) => {
  return (
    <div
      css={css({
        width: 270,
        display: "flex",
        flexDirection: "column",
        fontFamily: "Noto Sans KR",
        padding: "32px 24px",
        borderRadius: 12,
        backgroundColor: "white",
        boxShadow: `0 2px 4px #00000020, 0 1px 2px #00000020`,
        "& svg": {
          marginBottom: 18,
        },
        "& .title": {
          fontSize: 18,
          fontWeight: 700,
        },
        "& .content": {
          color: "#6b7280",
          marginTop: 12,
          fontSize: 14,
          fontWeight: 300,
          lineHeight: 1.6,
        },
        "& input": {
          width: 180,
          marginTop: 12,
          border: "none",
          backgroundColor: "#00000010",
          padding: "10px 16px",
          fontSize: 12,
          borderRadius: 9,
        },
      })}
    >
      {withIcon && <Svg fill={mainColor} />}
      <div className="title">Modal Title</div>
      <div className="content">
        {type === "Default" &&
          `The bird fights its way out of the egg. The egg is the world. Who would
        be born must first destroy a world. The bird flies to God. That God's
        name is Abraxas.`}
        {type === "WithInput" && <input placeholder="Text1" />}
      </div>
      {withButton && <Button children="Check" />}
    </div>
  );
};

const Button = ({ children }: { children: string }) => {
  return (
    <button
      css={css({
        alignSelf: "center",
        // width: 50,
        marginTop: 20,
        backgroundColor: mainColor,
        color: "white",
        border: "none",
        fontFamily: "Noto Sans KR",
        fontWeight: "300",
        cursor: "pointer",
        borderRadius: 10,
        fontSize: 12,
        padding: "8px 12px",
      })}
    >
      <span>{children}</span>
    </button>
  );
};
