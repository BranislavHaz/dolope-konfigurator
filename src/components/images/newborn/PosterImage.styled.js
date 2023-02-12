import styled from "styled-components";
import * as vars from "Variables";

export const MainImage = styled.img``;

export const ImageWrap = styled.div`
  .swiper,
  ${MainImage} {
    width: auto;
    height: ${({ dimensions }) => dimensions.height / 2.25}px;
  }

  .swiper {
    .swiper-button-prev,
    .swiper-button-next {
      height: ${({ dimensions }) => dimensions.height / 2}px;
      top: 0;

      &::after {
        font-size: ${({ dimensions }) => dimensions.width / 10}px;
        color: #000;
        transition: font-size 0.15s ease-in;
      }

      &:hover::after {
        font-size: ${({ dimensions }) => dimensions.width / 9}px;
      }

      @media ${vars.DEVICES.mobileS} {
        width: auto;
      }
      @media ${vars.DEVICES.laptop} {
        width: ${({ dimensions }) => dimensions.width / 9}px;
      }
    }

    .swiper-button-prev {
      left: 0;
      right: auto;
      justify-content: start;
    }

    .swiper-button-next {
      right: 0;
      left: auto;
      justify-content: end;
    }
  }
`;
