import React from "react";
import * as $ from "./SectionDivider.styled";

const SectionDivider = ({ children, title, isActive }) => {
  return (
    <$.SectionDivider isActive={isActive}>
      <$.Title>{title}</$.Title>
      {children}
    </$.SectionDivider>
  );
};

export default SectionDivider;
