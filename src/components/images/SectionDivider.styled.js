import styled from "styled-components";
import * as pallete from "Variables";

export const SectionDivider = styled.div`
  padding: 1em 2em;
  margin: 1em 0;
  border: 1px solid rgba(132, 154, 141, 0.12);
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  font-family: Poppins;
  backdrop-filter: blur(5px);
`;

export const Title = styled.h2`
  font-size: 3vh;
  text-decoration: underline ${pallete.MAINCOLOR};
  margin-bottom: 0.5em;
`;
