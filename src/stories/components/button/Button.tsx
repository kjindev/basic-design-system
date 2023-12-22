import { css } from "@emotion/react";

interface Props {
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
}

// export const Button = () => {
//   return <button type="button" css={css`
//   color: hotpink;
// `}>{children}</button>;
// };

export const Button = ({ backgroundColor, size, children }: Props) => {
  const style = css({
    backgroundColor: backgroundColor,
    border: "none",
    borderRadius: "10px",
    fontSize: "14px",
    padding: "10px 14px",
    cursor: "pointer",
  });
  return <button css={style}>{children}</button>;
};
