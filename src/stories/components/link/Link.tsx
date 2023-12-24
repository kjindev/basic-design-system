import { css } from "@emotion/react";
import { mainColor, subColor2 } from "../../../util/constant";

interface Props {
  label?: string;
  type?: string;
}

export const Link = ({ type, label }: Props) => {
  return (
    <div
      css={css({
        fontWeight: "400",
        fontSize: 14,
        cursor: "pointer",
        color: mainColor,
        textDecoration: "underline #0D689E",
        "&:hover": {
          color: subColor2,
          textDecoration: "underline #BAD5E8",
        },
      })}
    >
      {label}
    </div>
  );
};
