import styled from "styled-components";
import * as vars from "Variables";
import { textToRgba } from "lib/formatColors";
import { formatTextNB } from "lib/formatText";

export const Frame = styled.div``;
export const PosterWrap = styled.div``;
export const TopContent = styled.div``;
export const BottomContent = styled.div``;
export const MainImage = styled.img``;
export const Name = styled.div``;
export const ElementsWrap = styled.div``;
export const Element = styled.div``;
export const ElementText = styled.div``;
export const Subtitle = styled.div``;
export const EditableText = styled.div``;
export const ElementIcon = styled.div``;
export const CustomText = styled.div``;

export const PosterView = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 1;

  @media ${vars.DEVICES.mobileS} and (orientation: portrait) {
    justify-content: center;
    flex-direction: column;
  }

  @media ${vars.DEVICES.mobileS} and (orientation: landscape) {
    justify-content: center;
    flex-direction: row;
  }

  @media ${vars.DEVICES.laptop} {
    flex-direction: row;
    margin-top: 0;
  }

  @media ${vars.DEVICES.laptopL} {
    justify-content: end;
  }
`;

export const Poster = styled.div`
  box-shadow: 5px 5px 15px 5px rgba(128, 128, 128, 0.24);
  font-family: ${({ font }) => formatTextNB(font).font},
    ${({ font }) => formatTextNB(font).fontType};
  background-color: #fff;

  @media ${vars.DEVICES.mobileS} and (orientation: portrait) {
    width: 80vw;
    height: ${({ dimensions }) => dimensions.width * 1.5}px;
  }

  @media ${vars.DEVICES.mobileS} and (orientation: landscape) {
    width: ${({ dimensions }) => dimensions.height / 1.5}px;
    height: 65vh;
  }

  @media ${vars.DEVICES.laptop} {
    position: fixed;
    top: 50%;
    width: ${({ dimensions }) => dimensions.height / 1.5}px;
    height: 80vh;
    transform: translateY(-50%);
  }

  ${Frame} {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: ${({ backgroundColor }) =>
      textToRgba(backgroundColor, 0.15)};
    border: ${({ dimensions }) => dimensions.height / 500}em solid
      ${({ isFrameActive, backgroundColor, mainColor }) =>
        isFrameActive
          ? backgroundColor !== "white"
            ? "rgba(255, 255, 255, 1)"
            : textToRgba(mainColor, 0.15)
          : "rgba(255, 255, 255, 0)"};
  }

  ${PosterWrap} {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 90%;
    grid-template-rows: repeat(2, 48%);
    justify-content: center;
    align-content: center;
  }

  ${TopContent} {
    text-align: center;
    position: relative;
  }

  ${MainImage} {
    width: auto;
    height: ${({ dimensions }) => dimensions.height / 2.25}px;
    transition: font-size 0.25s ease-out 50ms;
  }

  ${Name} {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: ${({ dimensions }) => dimensions.height / 12}px;
    color: ${({ mainColor }) => textToRgba(mainColor)};
    font-size: ${({ dimensions, font }) =>
      dimensions.height / formatTextNB(font).name}em;
  }

  ${ElementsWrap} {
    margin-top: ${({ dimensions }) => dimensions.height / 40}px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  & ${Element} {
    min-height: ${({ dimensions }) => dimensions.height / 10}px;
    padding: ${({ dimensions }) => dimensions.height / 100}px 0;

    &:nth-of-type(1),
    &:nth-of-type(2) {
      border-bottom: ${({ dimensions }) => dimensions.height / 500}px solid
        ${({ mainColor }) => textToRgba(mainColor, 0.15)};
    }

    &:nth-of-type(3),
    &:nth-of-type(4) {
      border-top: ${({ dimensions }) => dimensions.height / 500}px solid
        ${({ mainColor }) => textToRgba(mainColor, 0.15)};
    }

    &:nth-of-type(1),
    &:nth-of-type(3) {
      display: grid;
      grid-template-columns: 1fr 2fr;
      border-right: ${({ dimensions }) => dimensions.height / 500}px solid
        ${({ mainColor }) => textToRgba(mainColor, 0.15)};
    }

    &:nth-of-type(2),
    &:nth-of-type(4) {
      display: grid;
      grid-template-columns: 2fr 1fr;
      border-left: ${({ dimensions }) => dimensions.height / 500}px solid
        ${({ mainColor }) => textToRgba(mainColor, 0.15)};
    }
  }

  & ${ElementText} {
    color: ${({ font }) => formatTextNB(font).textColor};
  }

  & ${Subtitle} {
    font-size: ${({ dimensions, font }) =>
      dimensions.height / formatTextNB(font).subtitle}em;
    font-weight: ${({ font }) => formatTextNB(font).subtitleWeight};
  }

  & ${EditableText} {
    font-size: ${({ dimensions }) => dimensions.height / 650}em;
  }

  ${ElementIcon} {
    svg {
      width: ${({ dimensions }) => dimensions.height / 190}em;
      height: ${({ dimensions }) => dimensions.height / 190}em;
      opacity: 0.65;
    }

    &:nth-of-type(1),
    &:nth-of-type(3) {
      transform: rotate(-30deg);
    }

    &:nth-of-type(2),
    &:nth-of-type(4) {
      transform: rotate(30deg);
    }
  }

  ${CustomText} {
    width: 90%;
    min-height: ${({ dimensions }) => dimensions.height / 10}px;
    max-height: ${({ dimensions }) => dimensions.height / 10}px;
    overflow-y: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-top: ${({ dimensions }) => dimensions.height / 80}px;
    font-size: ${({ dimensions, font }) =>
      dimensions.height / formatTextNB(font).customText}em;
    color: ${({ font }) => formatTextNB(font).textColor};
  }
`;
