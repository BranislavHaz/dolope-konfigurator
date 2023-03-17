import styled from "styled-components";
import * as vars from "Variables";
import { textToRgba } from "lib/formatColors";

export const Frame = styled.div``;
export const PosterWrap = styled.div``;
export const PosterImage = styled.div``;

export const Poster = styled.div`
  box-shadow: 5px 5px 15px 5px rgba(128, 128, 128, 0.24);
  background-color: #fff;

  @media ${vars.DEVICES.mobileS} and (orientation: portrait) {
    width: ${({ isMain }) => (isMain ? "80vw" : "55vw")};
    height: ${({ dimensions }) => dimensions.width * 1.5}px;
  }

  @media ${vars.DEVICES.mobileS} and (orientation: landscape) {
    width: ${({ dimensions }) => dimensions.height / 1.5}px;
    height: 65vh;
  }

  @media ${vars.DEVICES.laptop} {
    width: ${({ dimensions }) => dimensions.height / 1.5}px;
    height: 55vh;

    // isMain
    /*     position: ${({ isMain }) => isMain && "fixed"};
    top: ${({ isMain }) => isMain && "50%"};
    transform: ${({ isMain }) => isMain && "translateY(-50%)"}; */
  }

  ${Frame} {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: ${({ backgroundColor }) =>
      textToRgba(backgroundColor, 0.15)};
    border-width: ${({ isFrameActive, dimensions }) =>
      isFrameActive ? `${dimensions.height / 500}em` : 0};
    border-style: ${({ isFrameActive }) => (isFrameActive ? "solid" : "none")};
    border-color: ${({ isFrameActive, backgroundColor, mainColor }) =>
      isFrameActive
        ? backgroundColor !== "white"
          ? "rgba(255, 255, 255, 1)"
          : textToRgba(mainColor, 0.15)
        : "transparent"};
    /* border: ${({ dimensions }) => dimensions.height / 500}em solid
      ${({ isFrameActive, backgroundColor, mainColor }) =>
      isFrameActive
        ? backgroundColor !== "white"
          ? "rgba(255, 255, 255, 1)"
          : textToRgba(mainColor, 0.15)
        : "rgba(255, 255, 255, 0)"}; */
  }

  ${PosterWrap} {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: end;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
