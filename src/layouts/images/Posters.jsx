import React from "react";
import * as $ from "./Posters.styled";

import iconPrice from "assets/images/newborn/iconPrice.svg";
import iconConfigurator from "assets/images/newborn/iconConfigurator.svg";
import iconAddToCart from "assets/images/newborn/iconAddToCart.svg";

const Posters = ({ children }) => {
  return (
    <>
      <$.MobileTopBar></$.MobileTopBar>
      <$.Main>
        <$.MainTitle>Dolope</$.MainTitle>
        {children}
      </$.Main>
      <$.MobileBottomBar>
        <$.PriceElement>
          <img src={iconPrice} alt="Suma" />
          13€
        </$.PriceElement>
        <$.ConfiguratorElement>
          <img src={iconConfigurator} alt="Suma" />
          Otvoriť konfigurátor
        </$.ConfiguratorElement>
        <$.AddToCartElement>
          <img src={iconAddToCart} alt="Pridať do košíka" />
          Pridať do košíka
        </$.AddToCartElement>
      </$.MobileBottomBar>
    </>
  );
};

export default Posters;
