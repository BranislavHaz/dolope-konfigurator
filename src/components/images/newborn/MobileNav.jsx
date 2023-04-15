import React from "react";
import { useNavigate } from "react-router-dom";
import * as $ from "./MobileNav.styled";

import Icon from "components/images/newborn/Icon";

const MobileNav = ({ step }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/newborn/krok2");
  };

  return (
    <$.MobileNav step={step}>
      <Icon icon="logo" color="#fff" />
      <$.NextButton onClick={handleClick}>Pokračovať</$.NextButton>
    </$.MobileNav>
  );
};

export default MobileNav;
