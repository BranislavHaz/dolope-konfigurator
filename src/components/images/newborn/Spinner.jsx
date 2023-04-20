import React from "react";
import * as $ from "./Spinner.styled";

const Spinner = ({ isVisible }) => {
  return (
    <$.Spinner isVisible={isVisible}>
      <$.SpinnerWrap>
        <$.SpinnerCircle />
        <$.SpinnerText>Tvoj obraz letí do košíka 🚀</$.SpinnerText>
      </$.SpinnerWrap>
    </$.Spinner>
  );
};

export default Spinner;
