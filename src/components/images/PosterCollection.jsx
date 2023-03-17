import React, { useState, useRef, useEffect } from "react";
import ImagesCollection from "utils/ImagesCollection";
import { useNewbornStore } from "./PosterStore";

import * as $ from "./PosterCollection.styled";

const PosterCollection = ({ order }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const elementRef = useRef(null);

  const { backgroundColor, borderColor, frame, mainColor } = useNewbornStore(
    (state) => state
  );

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
      ref={elementRef}
      dimensions={dimensions}
      isFrameActive={frame}
      mainColor={mainColor}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    >
      <$.Frame>
        <$.PosterWrap>
          <ImagesCollection order={order} dimensions={dimensions} />
        </$.PosterWrap>
      </$.Frame>
    </$.Poster>
  );
};

export default PosterCollection;
