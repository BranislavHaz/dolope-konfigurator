import styled from "styled-components";

const formatTextSize = (font) => {
  switch (font) {
    case "Amatic SC":
      return {
        font: "Amatic SC",
        fontType: "cursive",
        name: "150%",
        elementText: "1.8vw",
        subtitle: "3vw",
        subtitleWeight: 900,
        customText: "1.8vw",
        textColor: "#575757",
      };
    case "Solitreo":
      return {
        font: "Solitreo",
        fontType: "cursive",
        name: "3vw",
        elementText: "1.5vw",
        elementTextOpacity: 1,
        subtitle: "2vw",
        subtitleWeight: 900,
        customText: "1.4vw",
        textColor: "#515151",
      };
    case "Bebas Neue":
      return {
        font: "Bebas Neue",
        fontType: "cursive",
        name: "3.5vw",
        elementText: "1.5vw",
        elementTextOpacity: 0.7,
        subtitle: "2vw",
        subtitleWeight: 400,
        customText: "1.4vw",
        textColor: "#5c5c5c",
      };
    case "Lobster":
      return {
        font: "Lobster",
        fontType: "cursive",
        name: "3vw",
        elementText: "1.4vw",
        elementTextOpacity: 0.7,
        subtitle: "1.8vw",
        subtitleWeight: 400,
        customText: "1.4vw",
        textColor: "#434242",
      };
    case "Dancing Script":
      return {
        font: "Dancing Script",
        fontType: "cursive",
        name: "3.2vw",
        elementText: "1.4vw",
        elementTextOpacity: 0.7,
        subtitle: "1.8vw",
        subtitleWeight: 600,
        customText: "1.6vw",
        textColor: "#434242",
      };
    case "Cinzel":
      return {
        font: "Cinzel",
        fontType: "serif",
        name: "2.6vw",
        elementText: "1.3vw",
        elementTextOpacity: 0.7,
        subtitle: "1.6vw",
        subtitleWeight: 600,
        customText: "1.3vw",
        textColor: "#1c1c1c",
      };
    default:
      break;
  }
};

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
  width: 50%;
  height: ${({ dimensions }) => dimensions.width * 1.43}px;
  box-shadow: 5px 5px 15px 5px rgba(128, 128, 128, 0.24);
  font-family: ${({ font }) => formatTextSize(font).font},
    ${({ font }) => formatTextSize(font).fontType};
  background-color: ${(props) => props.backgroundColor};

  ${Frame} {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: ${({ dimensions }) => dimensions.height / 500}em solid
      rgba(255, 255, 255, ${({ isFrameActive }) => (isFrameActive ? 1 : 0)});
  }

  ${PosterWrap} {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 90%;
    grid-template-rows: repeat(2, 45%);
    justify-content: center;
    align-content: center;
  }

  ${TopContent} {
    text-align: center;
  }

  ${MainImage} {
    width: auto;
    height: ${({ dimensions }) => dimensions.height / 40}em;
  }

  ${Name} {
    text-align: center;
    color: ${({ mainColor }) => mainColor};
    //font-size: ${({ font }) => formatTextSize(font).name};
    font-size: ${({ dimensions }) => dimensions.height / 250}em;
  }

  ${ElementsWrap} {
    margin-top: 1.5vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    align-items: center;
  }

  & ${Element} {
    padding: ${({ dimensions }) => dimensions.height / 100}px 0;

    &:nth-of-type(1),
    &:nth-of-type(2) {
      border-bottom: ${({ dimensions }) => dimensions.height / 500}px solid
        ${(props) => props.borderColor};
    }

    &:nth-of-type(3),
    &:nth-of-type(4) {
      border-top: ${({ dimensions }) => dimensions.height / 500}px solid
        ${(props) => props.borderColor};
    }

    &:nth-of-type(1),
    &:nth-of-type(3) {
      display: grid;
      grid-template-columns: 1fr 2fr;
      border-right: ${({ dimensions }) => dimensions.height / 500}px solid
        ${(props) => props.borderColor};
    }

    &:nth-of-type(2),
    &:nth-of-type(4) {
      display: grid;
      grid-template-columns: 2fr 1fr;
      border-left: ${({ dimensions }) => dimensions.height / 500}px solid
        ${(props) => props.borderColor};
    }
  }

  & ${ElementText} {
    //font-size: ${({ font }) => formatTextSize(font).elementText};
    color: ${({ font }) => formatTextSize(font).textColor};
  }

  & ${Subtitle} {
    //font-size: ${({ font }) => formatTextSize(font).subtitle};
    font-size: ${({ dimensions }) => dimensions.height / 350}em;
    font-weight: ${({ font }) => formatTextSize(font).subtitleWeight};
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

  & ${CustomText} {
    //font-size: ${({ font }) => formatTextSize(font).customText};
    font-size: ${({ dimensions }) => dimensions.height / 650}em;
    margin-top: ${({ dimensions }) => dimensions.height / 500}em;
  }
`;
