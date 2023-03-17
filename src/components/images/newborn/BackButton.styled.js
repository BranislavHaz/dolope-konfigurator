import styled from "styled-components";
import * as vars from "Variables";

export const BackButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Poppins;
  font-weight: 800;
  font-size: 0.8rem;
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  left: 1rem;
  transition: all 0.1s ease-out;
  cursor: pointer;
  z-index: 3;

  &:hover {
    font-size: 0.82rem;
  }

  @media ${vars.DEVICES.mobileS} {
    padding: 0.6rem;
    top: 0.5rem;
    position: fixed;
    box-shadow: rgb(0 0 0 / 8%) 0px 0px 4px;
  }

  @media ${vars.DEVICES.laptop} {
    padding: 1rem;
    top: 1rem;
    position: absolute;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  }

  @media ${vars.DEVICES.laptopL} {
    padding: 1.2rem;
  }
`;

export const BackButtonMobile = styled.span`
  text-transform: uppercase;

  @media ${vars.DEVICES.mobileS} {
    display: block;
  }

  @media ${vars.DEVICES.laptop} {
    display: none;
  }

  &::before {
    content: "<";
    margin-right: 0.3rem;
  }
`;

export const BackButtonLaptop = styled.span`
  @media ${vars.DEVICES.mobileS} {
    display: none;
  }

  @media ${vars.DEVICES.laptop} {
    display: block;
  }

  &::before {
    content: "<";
    margin-right: 0.3rem;
  }
`;
