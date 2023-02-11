import React, { useState, useEffect, useRef } from "react";
import { formatNumber2Decimals } from "lib/formatNumbers";
import { textToRgba } from "lib/formatColors";
import { formatdDateLocal } from "lib/formatDates";
import { useNewbornStore } from "../PosterStore";
import PosterImage, { mainImagesArray } from "./PosterImage";

import MobilePrice from "./MobilePrice";

//import "assets/images/newborn/PosterView.css";
import * as $ from "./PosterView.styled";

// Icons
import Icon from "./Icon";

const Temp = () => {
  const {
    indexImage,
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
    setIndexImage,
    increaseIndexImage,
    decreaseIndexImage,
  } = useNewbornStore((state) => state);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const elementRef = useRef(null);

  const handleIndexImage = (type) => () => {
    const maxIndex = mainImagesArray.length - 1;

    if (type === "inc") {
      if (indexImage === maxIndex) {
        setIndexImage(0);
      } else {
        increaseIndexImage();
      }
    }

    if (type === "dec") {
      if (indexImage === 0) {
        setIndexImage(maxIndex);
      } else {
        decreaseIndexImage();
      }
    }
  };

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
    <$.PosterView>
      <$.Poster
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
              <$.BackImageArrow onClick={handleIndexImage("dec")} />
              <$.NextImageArrow onClick={handleIndexImage("inc")} />
              <PosterImage />
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
      <MobilePrice />
    </$.PosterView>
  );
};

export default Temp;
