import React from "react";
import * as $ from "./MobilePrice.styled";
import { useNewbornStore } from "../PosterStore";

// Icons
import Icon from "./Icon";

const MobilePrice = () => {
  const { size, menuActive } = useNewbornStore((state) => state);
  return (
    <$.PriceWrap isActive={menuActive}>
      <$.Price>
        <Icon icon="price" color="#000" />
        Cena obrazu:{" "}
        <$.PriceHighlight>{size === "a4" ? "8€" : "13€"}</$.PriceHighlight>
      </$.Price>
    </$.PriceWrap>
  );
};

export default MobilePrice;
