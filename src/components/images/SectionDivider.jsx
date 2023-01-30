import React from "react";
import * as $ from "./SectionDivider.styled";

const SectionDivider = ({ children, title }) => {
  return (
    <$.SectionDivider>
      <$.Title>{title}</$.Title>
      {children}
    </$.SectionDivider>
  );
};

export default SectionDivider;
