import styled from "styled-components";
import * as pallete from "Variables";

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8%;
  background: linear-gradient(
    to right,
    ${pallete.MAINCOLOR} 0%,
    ${pallete.MAINCOLOR} 40%,
    #fff 40%,
    #fff 100%
  );
`;

export const MainTitle = styled.p`
  position: fixed;
  top: 5vh;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 0;
  font-size: 40vh;
  color: rgba(132, 154, 141, 0.12);
  text-transform: uppercase;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
`;
