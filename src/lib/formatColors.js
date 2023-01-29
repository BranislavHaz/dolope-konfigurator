export const textToRgba = (colorName, opacity = 1) => {
  switch (colorName) {
    case "blue":
      return `rgba(118, 209, 234, ${opacity})`;
    case "pink":
      return `rgba(255, 192, 203, ${opacity})`;
    case "gray":
      return `rgba(202, 202, 202, ${opacity})`;
    case "beige":
      return `rgba(228, 176, 120, ${opacity})`;
    case "white":
      return `rgba(255, 255, 255, ${opacity})`;
    default:
      return `rgba(0, 0, 0, 1)`;
  }
};

export const rgbaToText = (rgba, opacity = 0.15) => {
  switch (rgba) {
    case `rgba(118, 209, 234, ${opacity})`:
      return "blue";
    case `rgba(255, 192, 203, ${opacity})`:
      return "pink";
    case `rgba(202, 202, 202, ${opacity})`:
      return "gray";
    case `rgba(228, 176, 120, ${opacity})`:
      return "beige";
    case `rgba(255, 255, 255, ${opacity})`:
      return "white";
    default:
      return "black";
  }
};
