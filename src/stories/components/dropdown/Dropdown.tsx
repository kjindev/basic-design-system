import { css } from "@emotion/react";
import { greyBg, greyText, subColor2 } from "../../../util/constant";
import { useState } from "react";
import { ReactComponent as Svg } from "../../assets/expand.svg";
import { ReactComponent as Svg2 } from "../../assets/expand_less.svg";

interface Props {
  type?: string;
  withIcon?: boolean;
}

export const Dropdown = ({ type, withIcon }: Props) => {
  const arrayLength = 4;
  const [isHover, setIsHover] = useState(false);

  if (type === "Destructive") {
    return (
      <div
        css={css({
          height: 250,
          display: "flex",
          alignItems: "center",
          fontFamily: "Noto Sans KR",
          position: "relative",
          fontSize: 12,
          "& .label": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: 150,
            borderRadius: 8,
            backgroundColor: greyBg,
            color: greyText,
            padding: "6px 8px",
          },
        })}
      >
        <div id="selectBox">
          <div className="label">
            <div>Select Here</div>
            {withIcon && <Svg fill={greyText} />}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        css={css({
          height: 250,
          display: "flex",
          alignItems: "center",
          fontFamily: "Noto Sans KR",
          position: "relative",
          fontSize: 12,
          "& .label": {
            width: 150,
            borderRadius: 8,
            backgroundColor: subColor2,
            padding: "6px 8px",
          },
          "& .label:hover": {
            cursor: "pointer",
          },
          "& .label-clicked": {
            width: 150,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            backgroundColor: subColor2,
            padding: "6px 8px",
          },
          "& .label-clicked:hover": {
            cursor: "pointer",
          },
          "& .labelBox": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "& svg": {
              display: "flex",
              alignItems: "center",
            },
          },
          "& .option": {
            position: "absolute",
          },
          "& .option-hidden": {
            display: "none",
          },
          "& .optionItem": {
            fontSize: 12,
            width: 150,
            backgroundColor: "#00000010",
            padding: "6px 8px",
          },
          "& .optionLastItem": {
            fontSize: 12,
            width: 150,
            backgroundColor: "#00000010",
            padding: 8,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          },
          "& .optionItem:hover": {
            backgroundColor: "#00000020",
            cursor: "pointer",
          },
          "& .optionLastItem:hover": {
            backgroundColor: "#00000020",
            cursor: "pointer",
          },
        })}
      >
        <div id="selectBox">
          <div
            id="label"
            className={isHover ? "label-clicked" : "label"}
            onClick={() => setIsHover(!isHover)}
          >
            <div className="labelBox">
              <div>Select Here</div>
              {withIcon && <div>{isHover ? <Svg2 /> : <Svg />}</div>}
            </div>
          </div>
          <div className={isHover ? "option" : "option-hidden"}>
            {Array.from({ length: arrayLength }).map((_, index) => (
              <div
                key={index}
                id="optionItem"
                className={
                  index + 1 === arrayLength ? "optionLastItem" : "optionItem"
                }
              >
                option{index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};
