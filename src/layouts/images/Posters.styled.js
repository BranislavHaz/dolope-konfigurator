import styled from "styled-components";
import * as vars from "Variables";

export const Posters = styled.div`
  @media ${vars.DEVICES.mobileS} {
    width: 100%;
    height: 100vh;
    background: rgb(250, 250, 250);
    background: linear-gradient(
      180deg,
      rgba(250, 250, 250, 1) 45%,
      rgba(247, 247, 247, 1) 100%
    );
  }

  @media ${vars.DEVICES.laptop} {
    background: rgba(250, 250, 250, 0);
  }
`;

export const Main = styled.main`
  width: 100%;
  //height: 100%;

  @media ${vars.DEVICES.mobileS} {
    background: rgba(255, 255, 255, 0);
    display: flex;
    align-items: center;
  }

  @media ${vars.DEVICES.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2%;
    background: linear-gradient(
      to right,
      ${vars.MAINCOLOR} 0%,
      ${vars.MAINCOLOR} 30%,
      #fff 30%,
      #fff 100%
    );
  }

  @media ${vars.DEVICES.laptopL} {
    column-gap: 8%;
    background: linear-gradient(
      to right,
      ${vars.MAINCOLOR} 0%,
      ${vars.MAINCOLOR} 40%,
      #fff 40%,
      #fff 100%
    );
  }
`;

export const MainTitle = styled.p`
  position: fixed;
  top: 5vh;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 0;
  color: rgba(132, 154, 141, 0.12);
  text-transform: uppercase;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;

  @media ${vars.DEVICES.mobileS} {
    display: none;
  }

  @media ${vars.DEVICES.laptop} {
    display: block;
    font-size: 16rem;
  }

  @media ${vars.DEVICES.laptopL} {
    font-size: 23rem;
  }
`;

export const MobileTopBar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
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

  @media ${vars.DEVICES.laptop} {
    display: none;
  }
`;
