import { css } from "@emotion/react";

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
        color: "#0D689E",
        textDecoration: "underline #0D689E",
        "&:hover": {
          color: "#BAD5E8",
          textDecoration: "underline #BAD5E8",
        },
      })}
    >
      {label}
    </div>
  );
};
