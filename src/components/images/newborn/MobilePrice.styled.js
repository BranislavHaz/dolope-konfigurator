import styled from "styled-components";
import * as vars from "Variables";

export const PriceWrap = styled.div`
  margin-top: 4vh;
  display: flex;
  opacity: ${({ isActive }) => (isActive ? 0 : 1)};
  z-index: 2;

  @media ${vars.DEVICES.mobileS} and (orientation: portrait) {
    width: 100%;
    justify-content: center;
  }

  @media ${vars.DEVICES.mobileS} and (orientation: landscape) {
    justify-content: end;
    padding-right: 1rem;
    position: fixed;
    bottom: 4rem;
    right: 0;
  }

  @media ${vars.DEVICES.laptop} {
    display: none;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  font-family: Poppins;
  padding: 0.6rem 0.8rem;
  font-size: 0.8rem;
  border-radius: 15px;
  background-color: #fff;
  font-weight: 800;

  svg {
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.5rem;
  }
`;

export const PriceHighlight = styled.span`
  font-size: 1rem;
  margin-left: 0.5rem;
  color: ${vars.MAINCOLOR};
`;
