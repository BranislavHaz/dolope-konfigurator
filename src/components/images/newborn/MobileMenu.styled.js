import styled, { keyframes, css } from "styled-components";
import * as vars from "Variables";

const backgroundAnim = keyframes`
    0%   {
        background-color: transparent;
    }
    100%  {
        background-color: #98b4a3;
    }`;

const backgroundRule = css`
  animation: ${backgroundAnim} 0.2s ease-in-out forwards;
`;

export const MobileMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${vars.MAINCOLOR};
  color: #fff;
  font-family: Poppins;
  z-index: 2;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);

  @media ${vars.DEVICES.mobileS} and (orientation: portrait) {
    height: 3.5rem;
  }

  @media ${vars.DEVICES.mobileS} and (orientation: landscape) {
    height: 3rem;
  }

  @media ${vars.DEVICES.laptop} {
    display: none;
  }
`;

export const Element = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ isActive }) => isActive && backgroundRule};

  &:not(:last-of-type) {
    border-right: 1px solid rgba(255, 255, 255, 0.25);
  }

  @media ${vars.DEVICES.mobileS} and (orientation: portrait) {
    flex-direction: column;
  }

  @media ${vars.DEVICES.mobileS} and (orientation: landscape) {
    flex-direction: row;
  }
`;

export const ElementIcon = styled.div`
  width: 1.4rem;
  height: 1.4rem;

  @media ${vars.DEVICES.mobileS} and (orientation: landscape) {
    margin-right: 0.3rem;
  }
`;

export const ElementText = styled.div`
  font-size: 0.8rem;
  font-weight: 800;
`;
