import React from "react";
import * as $ from "./NewbornPoster2.styled";

import PosterMain from "../PosterMain";

const NewbornPoster2 = () => {
  return (
    <$.PostersWrap>
      <PosterMain isSwiper={false} />
      <PosterMain isSwiper={false} />
      <PosterMain isSwiper={false} />
    </$.PostersWrap>
  );
};

export default NewbornPoster2;
