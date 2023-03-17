import React, { useState, useRef, useEffect } from "react";
import { formatNumber2Decimals } from "lib/formatNumbers";
import { textToRgba } from "lib/formatColors";
import { formatdDateLocal } from "lib/formatDates";
import { useNewbornStore } from "./PosterStore";

import PosterImage from "./newborn/PosterImage";
import Icon from "./newborn/Icon";

import * as $ from "./PosterMain.styled";

const PosterMain = ({ isSwiper, isMain }) => {
  const {
    name,
    date,
    time,
    weight,
    length,
    text,
    font,
    backgroundColor,
    mainColor,
    borderColor,
    frame,
  } = useNewbornStore((state) => state);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const elementRef = useRef(null);

  const handleResize = () => {
    const elementPoster = elementRef.current;
    if (elementPoster) {
      setDimensions({
        width: elementPoster.offsetWidth,
        height: elementPoster.offsetHeight,
      });
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [elementRef, dimensions.width, dimensions.height]);

  return (
    <$.Poster
      isSwiper={isSwiper}
      isMain={isMain}
      ref={elementRef}
      dimensions={dimensions}
      isFrameActive={frame}
      mainColor={mainColor}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      font={font}
    >
      <$.Frame>
        <$.PosterWrap>
          <$.TopContent>
            <PosterImage dimensions={dimensions} isSwiper={isSwiper} />
          </$.TopContent>
          <$.BottomContent>
            <$.Name textColor={mainColor} font={font}>
              {name}
            </$.Name>
            <$.ElementsWrap>
              <$.Element>
                <$.ElementIcon>
                  <Icon icon="date" color={textToRgba(mainColor)} />
                </$.ElementIcon>
                <$.ElementText>
                  <$.Subtitle>Dátum</$.Subtitle>
                  <$.EditableText>{formatdDateLocal(date)}</$.EditableText>
                </$.ElementText>
              </$.Element>
              <$.Element>
                <$.ElementText>
                  <$.Subtitle>Čas</$.Subtitle>
                  <$.EditableText>{time}</$.EditableText>
                </$.ElementText>
                <$.ElementIcon>
                  <Icon icon="time" color={textToRgba(mainColor)} />
                </$.ElementIcon>
              </$.Element>
              <$.Element>
                <$.ElementIcon>
                  <Icon icon="weight" color={textToRgba(mainColor)} />
                </$.ElementIcon>
                <$.ElementText>
                  <$.Subtitle>Váha</$.Subtitle>
                  <$.EditableText>{`${formatNumber2Decimals(
                    weight
                  )} kg`}</$.EditableText>
                </$.ElementText>
              </$.Element>
              <$.Element>
                <$.ElementText>
                  <$.Subtitle>Dĺžka</$.Subtitle>
                  <$.EditableText>{`${length} cm`}</$.EditableText>
                </$.ElementText>
                <$.ElementIcon>
                  <Icon icon="length" color={textToRgba(mainColor)} />
                </$.ElementIcon>
              </$.Element>
            </$.ElementsWrap>
            <$.CustomText>{text}</$.CustomText>
          </$.BottomContent>
        </$.PosterWrap>
      </$.Frame>
    </$.Poster>
  );
};

export default PosterMain;
