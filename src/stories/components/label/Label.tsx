import { css } from "@emotion/react";
import { ReactComponent as Svg } from "../../assets/addCircle.svg";
interface Props {
  label?: string;
  type?: string;
}

export const Label = ({ type, label }: Props) => {
  return (
    <div
      css={css({
        display: "flex",
        alignItems: "center",
        fontFamily: "Noto Sans KR",
        fontWeight: "400",
        fontSize: 12,
        padding: "6px 10px",
        borderRadius: 12,
        color: "#0D689E",
        backgroundColor: "#BAD5E8",
        "& span": {
          marginBottom: "2px",
          paddingLeft: "3px",
        },
      })}
    >
      {type === "WithIcon" && <Svg width={12} height={12} fill="#0D689E" />}
      <span>{label}</span>
    </div>
  );
};
