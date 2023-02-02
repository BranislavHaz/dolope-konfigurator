import styled from "styled-components";
import * as vars from "Variables";
import { textToRgba } from "lib/formatColors";

export const PosterConfig = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;

  @media ${vars.DEVICES.mobileS} {
    width: 100%;
    margin-top: 0;
    padding: 0 1rem 6rem 1rem;
    position: absolute;
    top: 0;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(5px);
  }

  @media ${vars.DEVICES.laptop} {
    width: 95%;
    margin-top: 10%;
    padding: 0;
    position: relative;
    background-color: rgba(255, 255, 255, 0);
    backdrop-filter: none;
  }

  @media ${vars.DEVICES.laptopL} {
    width: 85%;
  }

  /*   form {
    display: flex;
    flex-direction: column;
    align-items: center;
  } */

  input,
  textarea {
    border-radius: 0.5em;
    box-shadow: inset 0 1px 2px #ddd;
    border: 1px solid rgba(132, 154, 141, 0.12);
    display: inline-block;
    width: 100%;
    padding: 0.5em;
    font-family: "Poppins";

    @media ${vars.DEVICES.laptop} {
      font-size: 1em;
    }

    @media ${vars.DEVICES.laptopL} {
      font-size: 1.2em;
    }
  }

  input:focus,
  textarea:focus {
    outline: none;
    background-color: rgba(132, 154, 141, 0.05);
    box-shadow: inset 0 1px 2px rgba(132, 154, 141, 0.12);
  }
`;

export const Title = styled.div`
  font-family: Poppins;
  margin-bottom: 5vh;

  @media ${vars.DEVICES.mobileS} {
    display: none;
  }

  @media ${vars.DEVICES.laptop} {
    display: block;
  }
`;

export const Title1Line = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 10vh;
  color: ${vars.MAINCOLOR};
  text-transform: uppercase;
`;

export const Title2Line = styled.h2`
  padding-left: 0.3em;
  margin: -0.8em 0 0 0;
  font-size: 5vh;
  font-weight: 200;
  color: #000;
`;

export const SizeWrap = styled.div`
  width: 100%;

  @media ${vars.DEVICES.mobileS} {
    display: block;
  }

  @media ${vars.DEVICES.laptop} {
    display: flex;
  }
`;

export const SizeOption = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media ${vars.DEVICES.mobileS} {
    &:first-of-type {
      margin: 0 0 1rem 0;
    }
  }

  @media ${vars.DEVICES.laptop} {
    &:first-of-type {
      margin: 0 1.5em 0 0;
    }
  }
`;

export const SizePrice = styled.span`
  text-align: right;
  font-weight: 800;

  @media ${vars.DEVICES.laptop} {
    margin-left: 0.5rem;
    font-size: 1rem;
  }

  @media ${vars.DEVICES.laptopL} {
    margin-left: 1rem;
    font-size: 1.2rem;
  }
`;

export const Size = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  border-radius: 0.5em;
  border: 1px solid rgba(132, 154, 141, 0.12);
  box-shadow: ${({ isActive }) =>
    isActive
      ? "none"
      : `inset 0 1px
    2px #ddd`};
  color: ${({ isActive }) => (isActive ? "#fff" : "inherit")};
  background-color: ${({ isActive }) => (isActive ? vars.MAINCOLOR : "none")};

  & ${SizePrice} {
    color: ${({ isActive }) => (isActive ? "#fff" : vars.MAINCOLOR)};
  }

  @media ${vars.DEVICES.laptop} {
    font-size: 1em;
  }

  @media ${vars.DEVICES.laptopL} {
    font-size: 1.2em;
  }
`;

export const Label = styled.label`
  cursor: ${({ cursor }) => cursor} !important;
  display: block;
  margin: 0.5em 0;
  font-size: 1rem;
`;

export const LabelFlex = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${vars.DEVICES.mobileS} {
    & ${Label} {
      width: 48%;
    }
  }

  @media ${vars.DEVICES.laptop} {
    & ${Label} {
      width: 45%;
    }
  }
`;

export const ColorSet = styled.div`
  display: flex;
  margin-bottom: 1.5em;
`;

export const Subtitle = styled.p`
  margin: 0.5em 0;
  font-size: 1em;
`;

export const Color = styled.div`
  border-radius: 50%;
  background-color: ${({ id }) => textToRgba(id, 0.15)};
  cursor: pointer;
  border: 1px solid rgba(132, 154, 141, 0.12);
  box-shadow: ${({ isActive }) =>
    isActive ? `#5b5b5b 0px 0px 0px 2px` : "inset 0 1px 2px #ddd"};

  &:hover {
    box-shadow: inset 0 2px 3px #ddd;
  }

  @media ${vars.DEVICES.mobileS} {
    width: 2.3rem;
    height: 2.3rem;
    margin-right: 0.3rem;
  }

  @media ${vars.DEVICES.laptop} {
    width: 2.8rem;
    height: 2.8rem;
    margin-right: 0.3rem;
  }

  @media ${vars.DEVICES.laptopL} {
    width: 3.5rem;
    height: 3.5rem;
    margin-right: 0.5rem;
  }
`;

export const FontSet = styled.div``;

export const Font = styled.div`
  font-family: ${({ id }) => id};
  text-align: left;
  text-decoration: ${({ isActive }) =>
    isActive && `underline ${vars.MAINCOLOR}`};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media ${vars.DEVICES.mobileS} {
    font-size: 1.4rem;
    line-height: 2rem;
  }

  @media ${vars.DEVICES.laptopL} {
    font-size: 1.8rem;
    line-height: 2.5rem;
  }
`;

// Switcher frame

export const SwitcherWrapper = styled.div`
  position: relative;
  margin-bottom: 1em;
`;

export const SwitcherLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 5em;
  height: 2.4em;
  border-radius: 25px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 2em;
    height: 2em;
    margin: 0.2em 0.2em 0.2em 2.8em;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const SwitcherInput = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 5em;
  height: 2em;
  &:checked + ${SwitcherLabel} {
    background: ${vars.MAINCOLOR};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 2em;
      height: 2em;
      margin-left: 0.2em;
      transition: 0.2s;
    }
  }
`;
