import React from "react";

import PosterMain from "../PosterMain";
import MobilePrice from "./MobilePrice";

import * as $ from "./PosterView.styled";

const PosterView = () => {
  return (
    <$.PosterView>
      <PosterMain isSwiper={true} isMain={true} />
      <MobilePrice />
    </$.PosterView>
  );
};

export default PosterView;
