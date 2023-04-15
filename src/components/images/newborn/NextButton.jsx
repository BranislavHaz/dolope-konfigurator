import React from "react";
import { useNavigate } from "react-router-dom";
import * as $ from "./NextButton.styled";

const NextButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/newborn/krok2");
  };

  return (
    <$.ButtonWrapper>
      <$.Button onClick={handleClick}>Pokračovať</$.Button>
    </$.ButtonWrapper>
  );
};

export default NextButton;
