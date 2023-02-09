import React from "react";
import * as $ from "./MobileNav.styled";

import Icon from "components/images/newborn/Icon";

const MobileNav = () => {
  return (
    <$.MobileNav>
      <Icon icon="logo" color="#fff" />
      <$.AddToCart>Pridať do košíka</$.AddToCart>
    </$.MobileNav>
  );
};

export default MobileNav;
