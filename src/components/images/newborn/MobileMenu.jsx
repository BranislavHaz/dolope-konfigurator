import React from "react";
import * as $ from "./MobileMenu.styled";
import { useNewbornStore } from "components/images/PosterStore";

import Icon from "components/images/newborn/Icon";

const MobileMenu = () => {
  const { menuActive, setMenuActive, setFirstLoad } = useNewbornStore(
    (state) => state
  );

  const handleClick = (type) => {
    setFirstLoad(false);

    switch (type) {
      case "size":
        if (menuActive !== "size" || menuActive === false) {
          setMenuActive("size");
        } else {
          setMenuActive(false);
        }
        break;
      case "data":
        if (menuActive !== "data" || menuActive === false) {
          setMenuActive("data");
        } else {
          setMenuActive(false);
        }
        break;
      case "color":
        if (menuActive !== "color" || menuActive === false) {
          setMenuActive("color");
        } else {
          setMenuActive(false);
        }
        break;
      case "font":
        if (menuActive !== "font" || menuActive === false) {
          setMenuActive("font");
        } else {
          setMenuActive(false);
        }
        break;
      default:
        break;
    }
  };

  return (
    <$.MobileMenu>
      <$.Element
        isActive={menuActive === "size" && true}
        onClick={() => handleClick("size")}
      >
        <$.ElementIcon>
          <Icon icon="size" color="#fff" />
        </$.ElementIcon>
        <$.ElementText>Veľkosť</$.ElementText>
      </$.Element>
      <$.Element
        isActive={menuActive === "data" && true}
        onClick={() => handleClick("data")}
      >
        <$.ElementIcon>
          <Icon icon="data" color="#fff" />
        </$.ElementIcon>
        <$.ElementText>Údaje</$.ElementText>
      </$.Element>
      <$.Element
        isActive={menuActive === "color" && true}
        onClick={() => handleClick("color")}
      >
        <$.ElementIcon>
          <Icon icon="color" color="#fff" />
        </$.ElementIcon>
        <$.ElementText>Farby</$.ElementText>
      </$.Element>
      <$.Element
        isActive={menuActive === "font" && true}
        onClick={() => handleClick("font")}
      >
        <$.ElementIcon>
          <Icon icon="font" color="#fff" />
        </$.ElementIcon>
        <$.ElementText>Písmo</$.ElementText>
      </$.Element>
    </$.MobileMenu>
  );
};

export default MobileMenu;
