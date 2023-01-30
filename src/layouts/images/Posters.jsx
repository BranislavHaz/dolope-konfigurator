import React from "react";
import * as $ from "./Posters.styled";

const Posters = ({ children }) => {
  return (
    <$.Main>
      <$.MainTitle>Dolope</$.MainTitle>
      {children}
    </$.Main>
  );
};

export default Posters;
