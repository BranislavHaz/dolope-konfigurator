import styled from "styled-components";
import * as pallete from "Variables";
import { textToRgba } from "lib/formatColors";

export const PosterConfig = styled.div`
  margin-top: 10%;
  width: 80%;
  z-index: 1;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    margin: 0.5em 0;
    font-size: 1em;
  }

  input,
  textarea {
    border-radius: 0.5em;
    box-shadow: inset 0 1px 2px #ddd;
    border: 1px solid rgba(132, 154, 141, 0.12);
    display: inline-block;
    width: 100%;
    padding: 0.5em;
    font-family: "Poppins";
    font-size: 1.2em;
  }

  input:focus,
  textarea:focus {
    outline: none;
    //border: 1px solid ${pallete.MAINCOLOR};
    background-color: rgba(132, 154, 141, 0.05);
    box-shadow: inset 0 1px 2px rgba(132, 154, 141, 0.12);
  }
`;

export const Title1Line = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 10vh;
  color: ${pallete.MAINCOLOR};
  text-transform: uppercase;
`;

export const Title2Line = styled.h2`
  padding-left: 0.3em;
  margin: -0.8em 0 0 0;
  font-size: 5vh;
  font-weight: 200;
  color: #000;
`;

export const Title = styled.div`
  font-family: Poppins;
  margin-bottom: 5vh;
`;

export const SizeWrap = styled.div`
  width: 100%;
  display: flex;
`;

export const SizeOption = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:first-of-type {
    margin-right: 1.5em;
  }
`;

export const SizePrice = styled.span`
  margin-left: 1em;
  text-align: right;
  font-size: 1.2em;
  font-weight: 800;
`;

export const Size = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  border-radius: 0.5em;
  border: 1px solid rgba(132, 154, 141, 0.12);
  font-size: 1.2em;
  box-shadow: ${({ isActive }) =>
    isActive
      ? "none"
      : `inset 0 1px
    2px #ddd`};
  color: ${({ isActive }) => (isActive ? "#fff" : "inherit")};
  background-color: ${({ isActive }) =>
    isActive ? pallete.MAINCOLOR : "none"};

  & ${SizePrice} {
    color: ${({ isActive }) => (isActive ? "#fff" : pallete.MAINCOLOR)};
  }
`;

export const Label = styled.label`
  cursor: ${({ cursor }) => cursor} !important;
  display: block;
`;

export const LabelFlex = styled.div`
  display: flex;
  justify-content: space-between;
  & ${Label} {
    width: 45%;
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
  width: 2.5vw;
  height: 2.5vw;
  margin-right: 0.5em;
  border-radius: 50%;
  background-color: ${({ id }) => textToRgba(id, 0.15)};
  //outline: 0.1vw solid rgba(216, 216, 216, 0.5);
  cursor: pointer;
  /*box-shadow: ${({ isActive }) =>
    isActive
      ? `rgba(0, 0, 0, 0.16) 0px 3px 6px 0px,
      rgba(0, 0, 0, 0.23) 0px 3px 6px 0px`
      : "rgba(44, 62, 80, 0.12) 0px 15px 15px -15px inset"};*/
  //box-shadow: inset 0 1px 2px #ddd;
  border: 1px solid rgba(132, 154, 141, 0.12);
  box-shadow: ${({ isActive }) =>
    isActive ? `#5b5b5b 0px 0px 0px 2px` : "inset 0 1px 2px #ddd"};

  //brightness(90%);

  &:hover {
    box-shadow: inset 0 2px 3px #ddd;
  }
`;

export const FontSet = styled.div``;

export const Font = styled.div`
  font-family: ${({ id }) => id};
  text-align: left;
  font-size: 1.5vw;
  line-height: 2vw;
  text-decoration: ${({ isActive }) =>
    isActive && `underline ${pallete.MAINCOLOR}`};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
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
    background: ${pallete.MAINCOLOR};
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
