import styled from "styled-components";

const formatTextSize = (font) => {
  switch (font) {
    case "Amatic SC":
      return {
        font: "Amatic SC",
        fontType: "cursive",
        name: "4vw",
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

export const Frame = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 2.5vw solid
    rgba(255, 255, 255, ${({ isActive }) => (isActive ? 1 : 0)});
`;

export const PosterWrap = styled.div`
  width: 100%;
  min-height: 68vw;
  display: grid;
  grid-template-columns: 3vw 1fr 3vw;
  grid-template-rows: 3vw 1fr auto 3vw;
  justify-content: center;
  align-items: start;
`;

export const TopContent = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 2;
  text-align: center;
`;

export const BottomContent = styled.div`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 3;
`;

export const MainImage = styled.img`
  width: 86%;
  height: auto;
`;

export const Name = styled.div`
  min-height: 5.1vw;
  text-align: center;
  color: ${(props) => props.textColor};
`;

export const ElementsWrap = styled.div`
  margin-top: 1.5vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;
`;

export const Element = styled.div`
  padding-top: 0.5vw;
  min-height: 6.1vw;

  &:nth-of-type(1),
  &:nth-of-type(2) {
    border-bottom: 0.15vw solid ${(props) => props.borderColor};
  }

  &:nth-of-type(3),
  &:nth-of-type(4) {
    border-top: 0.15vw solid ${(props) => props.borderColor};
  }

  &:nth-of-type(1),
  &:nth-of-type(3) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    border-right: 0.15vw solid ${(props) => props.borderColor};
  }

  &:nth-of-type(2),
  &:nth-of-type(4) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    border-left: 0.15vw solid ${(props) => props.borderColor};
  }
`;

export const ElementText = styled.div``;

export const Subtitle = styled.div`
  min-height: 3.6vw;
`;

export const EditableText = styled.div`
  min-height: 2.3vw;
`;

export const ElementIcon = styled.div`
  &:nth-of-type(1),
  &:nth-of-type(3) {
    transform: rotate(-30deg);
  }

  &:nth-of-type(2),
  &:nth-of-type(4) {
    transform: rotate(30deg);
  }

  & svg {
    width: 4.5vw;
    height: 4.5vw;
    opacity: 0.65;
  }
`;

export const CustomText = styled.div`
  margin-top: 2.5vw;
  min-height: 2.3vw;
`;

export const PosterView = styled.div`
  width: 50%;
  box-shadow: 5px 5px 15px 5px rgba(128, 128, 128, 0.24);
  font-family: ${({ font }) => formatTextSize(font).font},
    ${({ font }) => formatTextSize(font).fontType};
  background-color: ${(props) => props.backgroundColor};

  & ${Name} {
    font-size: ${({ font }) => formatTextSize(font).name};
  }

  & ${ElementText} {
    font-size: ${({ font }) => formatTextSize(font).elementText};
    color: ${({ font }) => formatTextSize(font).textColor};
  }

  & ${Subtitle} {
    font-size: ${({ font }) => formatTextSize(font).subtitle};
    font-weight: ${({ font }) => formatTextSize(font).subtitleWeight};
  }

  & ${CustomText} {
    font-size: ${({ font }) => formatTextSize(font).customText};
    color: ${({ font }) => formatTextSize(font).textColor};
  }
`;
