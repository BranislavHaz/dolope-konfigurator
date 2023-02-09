import React from "react";
import * as $ from "./Posters.styled";

import MobileMenu from "components/images/newborn/MobileMenu";
import MobileNav from "components/images/newborn/MobileNav";

const Posters = ({ children }) => {
  return (
    <$.Posters>
      <MobileNav />
      <$.Main>
        <$.MainTitle>Dolope</$.MainTitle>
        {children}
      </$.Main>
      <MobileMenu />
    </$.Posters>
  );
};

export default Posters;
