export const formatTextNB = (font) => {
  switch (font) {
    case "Amatic SC":
      return {
        font: "Amatic SC",
        fontType: "cursive",
        name: "250",
        subtitle: "350",
        subtitleWeight: 800,
        textColor: "#575757",
        customText: 650,
      };
    case "Solitreo":
      return {
        font: "Solitreo",
        fontType: "cursive",
        name: "320",
        subtitle: "480",
        subtitleWeight: 900,
        textColor: "#515151",
        customText: 700,
      };
    case "Bebas Neue":
      return {
        font: "Bebas Neue",
        fontType: "cursive",
        name: "320",
        subtitle: "450",
        subtitleWeight: 400,
        textColor: "#5c5c5c",
        customText: 650,
      };
    case "Lobster":
      return {
        font: "Lobster",
        fontType: "cursive",
        name: "330",
        subtitle: "480",
        subtitleWeight: 400,
        textColor: "#434242",
        customText: 650,
      };
    case "Dancing Script":
      return {
        font: "Dancing Script",
        fontType: "cursive",
        name: "300",
        subtitle: "460",
        subtitleWeight: 600,
        textColor: "#434242",
        customText: 650,
      };
    case "Cinzel":
      return {
        font: "Cinzel",
        fontType: "serif",
        name: "400",
        subtitle: "600",
        subtitleWeight: 600,
        textColor: "#1c1c1c",
        customText: 750,
      };
    default:
      break;
  }
};
