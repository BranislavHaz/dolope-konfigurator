import React, { useState, useEffect, useRef } from "react";
import { formatNumber2Decimals } from "lib/formatNumbers";
import { textToRgba } from "lib/formatColors";
import { formatdDateLocal } from "lib/formatDates";
import { useNewbornStore } from "../PosterStore";

//import "assets/images/newborn/PosterView.css";
import * as $ from "./PosterView.styled";

// Icons
import IconDate from "./IconDate";
import IconTime from "./IconTime";
import IconWeight from "./iconWeight";
import IconLength from "./iconLength";

// Images
import zajkoslietadlom from "assets/images/newborn/imgZajkoSLietadlom.png";

const Temp = () => {
  const name = useNewbornStore((state) => state.name);
  const date = useNewbornStore((state) => state.date);
  const time = useNewbornStore((state) => state.time);
  const weight = useNewbornStore((state) => state.weight);
  const length = useNewbornStore((state) => state.length);
  const text = useNewbornStore((state) => state.text);
  const font = useNewbornStore((state) => state.font);
  const backgroundColor = useNewbornStore((state) => state.backgroundColor);
  const mainColor = useNewbornStore((state) => state.mainColor);
  const borderColor = useNewbornStore((state) => state.borderColor);
  const frame = useNewbornStore((state) => state.frame);

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
    window.addEventListener("onload", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("onload", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, [elementRef, dimensions.width, dimensions.height]);

  return (
    <$.PosterView
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
            <$.BackImageArrow />
            <$.NextImageArrow />
            <$.MainImage src={zajkoslietadlom} alt="Vlastný obrázok" />
          </$.TopContent>
          <$.BottomContent>
            <$.Name textColor={mainColor} font={font}>
              {name}
            </$.Name>
            <$.ElementsWrap>
              <$.Element>
                <$.ElementIcon>
                  <IconDate color={textToRgba(mainColor)} />
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
                  <IconTime color={textToRgba(mainColor)} />
                </$.ElementIcon>
              </$.Element>
              <$.Element>
                <$.ElementIcon>
                  <IconWeight color={textToRgba(mainColor)} />
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
                  <IconLength color={textToRgba(mainColor)} />
                </$.ElementIcon>
              </$.Element>
            </$.ElementsWrap>
            <$.CustomText>{text}</$.CustomText>
          </$.BottomContent>
        </$.PosterWrap>
      </$.Frame>
    </$.PosterView>
  );
};

export default Temp;
