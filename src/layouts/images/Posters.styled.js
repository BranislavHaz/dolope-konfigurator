import styled from "styled-components";
import * as vars from "Variables";

export const Main = styled.main`
  width: 100%;

  @media ${vars.DEVICES.mobileS} {
    height: calc(100vh - 10rem);
    background: #fff;
    display: flex;
    align-items: center;
  }

  @media ${vars.DEVICES.laptop} {
    height: auto;
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
  height: 5rem;
  background-color: red;

  @media ${vars.DEVICES.laptop} {
    display: none;
  }
`;

export const MobileBottomBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${vars.MAINCOLOR};
  color: #fff;
  font-family: Poppins;
  z-index: 2;

  img {
    width: 3rem;
    height: 3rem;
  }

  @media ${vars.DEVICES.laptop} {
    display: none;
  }
`;

export const PriceElement = styled.div`
  width: 30%;
`;

export const ConfiguratorElement = styled.div`
  width: 30%;
  position: relative;
  top: -2rem;
  background-color: ${vars.MAINCOLOR};
  border-radius: 50%;
`;

export const AddToCartElement = styled.div`
  width: 30%;
`;
