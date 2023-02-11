import styled from "styled-components";
import * as vars from "Variables";

export const SectionDivider = styled.div`
  padding: 1rem 2rem;
  //margin: 1rem 0;
  border: 1px solid rgba(132, 154, 141, 0.12);
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  font-family: Poppins;
  backdrop-filter: blur(5px);

  @media ${vars.DEVICES.mobileS} {
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    margin: 1rem 0;
  }

  @media ${vars.DEVICES.mobileS} and (orientation: landscape) {
    overflow-y: scroll;
    margin: 0;
  }

  @media ${vars.DEVICES.laptop} {
    overflow-y: auto;
    display: block;
    margin: 1rem 0;
  }
`;

export const Title = styled.h2`
  font-size: 3vh;
  text-decoration: underline ${vars.MAINCOLOR};
  margin-bottom: 0.5rem;
`;
