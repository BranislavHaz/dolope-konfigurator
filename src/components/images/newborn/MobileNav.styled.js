import styled from "styled-components";
import * as vars from "Variables";

export const NextButton = styled.div``;

export const MobileNav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: ${({ step }) => (step !== 1 ? "center" : "space-between")};
  align-items: center;
  padding: 0 1rem;
  background-color: #fff;
  border-bottom: 1px solid rgba(179, 179, 179, 0.15);
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.03);
  z-index: 2;

  svg {
    width: auto;
    height: 2.8rem;
  }

  ${NextButton} {
    padding: 0.4rem 0.5rem;
    border-radius: 10px;
    font-size: 0.8rem;
    font-weight: 800;
    font-family: Poppins;
    color: #fff;
    background-color: ${vars.MAINCOLOR};
    display: ${({ step }) => (step !== 1 ? "none" : "block")};
  }

  @media ${vars.DEVICES.laptop} {
    display: none;
  }
`;
