import React, { useState } from "react";
import * as $ from "./Collapse.styled";

const Collapse = ({ children, label }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => {
    setIsVisible(!isVisible);
  };

  return (
    <$.Collapse>
      <$.Label onClick={handleOpen}>{label}</$.Label>
      <$.Content isVisible={isVisible}>{children}</$.Content>
    </$.Collapse>
  );
};

export default Collapse;
