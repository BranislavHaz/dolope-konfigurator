import React, { useState, useRef, useEffect } from "react";
import ImagesCollection from "utils/ImagesCollection";
import { useNewbornStore } from "./PosterStore";

// Images
import kidsCollection1 from "assets/images/newborn/kids-collection1.png";
import kidsCollection2 from "assets/images/newborn/kids-collection2.png";

import * as $ from "./PosterCollection.styled";

const PosterCollection = ({ isMain, order }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const elementRef = useRef(null);

  const { backgroundColor, borderColor, frame } = useNewbornStore(
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
      isMain={isMain}
      ref={elementRef}
      dimensions={dimensions}
      isFrameActive={frame}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    >
      <$.Frame>
        <$.PosterWrap>
          <ImagesCollection order={order} />
        </$.PosterWrap>
      </$.Frame>
    </$.Poster>
  );
};

export default PosterCollection;
