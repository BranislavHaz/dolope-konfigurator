import styled from "styled-components";
import * as pallete from "Variables";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3em;
  background: linear-gradient(
    to right,
    ${pallete.MAINCOLOR} 0%,
    ${pallete.MAINCOLOR} 40%,
    #fff 40%,
    #fff 100%
  );
`;
