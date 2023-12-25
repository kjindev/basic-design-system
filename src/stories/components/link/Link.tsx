import { css } from "@emotion/react";
import { mainColor, subColor2 } from "../../../util/constant";

interface Props {
  children?: string;
}

export const Link = ({ children }: Props) => {
  return (
    <div
      css={css({
        fontWeight: "400",
        fontSize: 14,
        fontFamily: "Noto Sans KR",
        cursor: "pointer",
        color: mainColor,
        textDecoration: "underline #0D689E",
        "&:hover": {
          color: subColor2,
          textDecoration: "underline #BAD5E8",
        },
      })}
    >
      {children}
    </div>
  );
};
