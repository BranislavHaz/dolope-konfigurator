import styled from "styled-components";
import * as pallete from "Variables";
import { textToRgba } from "lib/formatColors";

export const PosterConfig = styled.div`
  width: 50%;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    width: fit-content;
  }
`;

export const Label = styled.label`
  cursor: ${({ cursor }) => cursor} !important;
`;

export const ColorSet = styled.div`
  display: flex;
`;

export const Color = styled.div`
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  background-color: ${({ id }) => textToRgba(id, 0.15)};
  outline: 0.1vw solid rgba(216, 216, 216, 0.5);
  cursor: pointer;
  box-shadow: ${({ isActive }) =>
    isActive
      ? `rgba(0, 0, 0, 0.16) 0px 3px 6px 0px,
      rgba(0, 0, 0, 0.23) 0px 3px 6px 0px`
      : "rgba(44, 62, 80, 0.12) 0px 15px 15px -15px inset"};
`;

export const FontSet = styled.div``;

export const Font = styled.div`
  font-family: ${({ id }) => id};
  text-align: left;
  font-size: 2vw;
  line-height: 3vw;
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
`;

export const SwitcherLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const SwitcherInput = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${SwitcherLabel} {
    background: ${pallete.MAINCOLOR};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
