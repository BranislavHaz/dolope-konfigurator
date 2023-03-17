import React from "react";
import { useNavigate } from "react-router-dom";

import * as $ from "./BackButton.styled";

const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/newborn");
  };

  return (
    <$.BackButtonWrap onClick={handleClick}>
      <$.BackButtonMobile>Späť</$.BackButtonMobile>
      <$.BackButtonLaptop>Späť na úpravu obrázka</$.BackButtonLaptop>
    </$.BackButtonWrap>
  );
};

export default BackButton;
