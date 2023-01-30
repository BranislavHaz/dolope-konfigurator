import React, { useState, useEffect, useRef } from "react";
import { formatNumber2Decimals } from "lib/formatNumbers";
import { textToRgba } from "lib/formatColors";
import { formatdDateLocal } from "lib/formatDates";
import { useNewbornStore } from "../PosterStore";
import PosterImage, { mainImagesArray } from "./PosterImage";

//import "assets/images/newborn/PosterView.css";
import * as $ from "./PosterView.styled";

// Icons
import IconDate from "./IconDate";
import IconTime from "./IconTime";
import IconWeight from "./iconWeight";
import IconLength from "./iconLength";

// Images
import zajkoLietadlo from "assets/images/newborn/zajko-lietadlo.png";
import slonikPocasie from "assets/images/newborn/slonik-pocasie.png";
import zirafaOblaciky from "assets/images/newborn/zirafa-oblaciky.png";

const mainImages = {
  zajkoLietadlo,
  slonikPocasie,
  zirafaOblaciky,
};

const Temp = () => {
  //const mainImage = useNewbornStore((state) => state.mainImage);
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
      </$.Poster>
    </$.PosterView>
  );
};

export default Temp;
