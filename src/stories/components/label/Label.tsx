import { css } from "@emotion/react";
import { ReactComponent as Svg } from "../../assets/addCircle.svg";
import { mainColor, subColor2 } from "../../../util/constant";
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
        color: mainColor,
        backgroundColor: subColor2,
        "& span": {
          marginBottom: "2px",
        },
      })}
    >
      {type === "WithIcon" && <Svg width={12} height={12} fill={mainColor} />}
      <span
        css={css(
          type === "WithIcon" && {
            paddingLeft: "3px",
          }
        )}
      >
        {label}
      </span>
    </div>
  );
};
