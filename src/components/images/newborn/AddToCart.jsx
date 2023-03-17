import React from "react";
import { useNavigate } from "react-router-dom";
import * as $ from "./AddToCart.styled";

const AddToCart = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // tu bude add to cart to Woo

    navigate("/newborn/krok2");
  };

  return (
    <$.ButtonWrapper>
      <$.Button onClick={handleClick}>Pridať do košíka</$.Button>
    </$.ButtonWrapper>
  );
};

export default AddToCart;
