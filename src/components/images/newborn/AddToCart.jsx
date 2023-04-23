import React, { useState } from "react";
import format from "date-fns/format";
import axios from "axios";
import { useNewbornStore } from "../PosterStore";
import { formatIndexImage } from "lib/formatIndexImage";
import { localizeText } from "lib/formatColors";

import * as $ from "./AddToCart.styled";

import Spinner from "./Spinner";

const AddToCart = () => {
  const [spinnerVisibility, setSpinnerVisibility] = useState(false);
  const {
    size,
    indexImage,
    name,
    date,
    time,
    weight,
    length,
    text,
    backgroundColor,
    mainColor,
    frame,
    font,
    setFullSeries,
  } = useNewbornStore((state) => state);

  const imageData = {
    "Typ obrazu": formatIndexImage(indexImage),
    Meno: name,
    "Dátum narodenia": format(new Date(date), "dd.MM.yyyy"),
    "Čas narodenia": time,
    Váha: `${weight.toString().replace(/\./g, ",")} kg`,
    Dĺžka: `${length} cm`,
    Venovanie: text,
    "Farba pozadia": localizeText(backgroundColor),
    "Hlavná farba": localizeText(mainColor),
    "Font písma": font,
    "Okraj na obraze": frame ? "áno" : "nie",
  };

  const getIdImage = (type) => {
    switch (type) {
      case "accept":
        setFullSeries(true);
        return size === "a4" ? "1663" : "1669";
      case "reject":
        setFullSeries(false);
        return size === "a4" ? "1662" : "1668";
      default:
        break;
    }
  };

  const handleClick = async (type) => {
    setSpinnerVisibility(true);

    axios
      .post(
        "https://dolope.sk/wp-json/cocart/v2/cart/add-item",
        {
          id: getIdImage(type),
          quantity: "1",
          item_data: { my_data: imageData },
        },
        {
          auth: {
            username: process.env.API_KEY,
            password: process.env.API_SECRET,
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        window.location.replace("https://dolope.sk/kosik/");
        setSpinnerVisibility(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Spinner isVisible={spinnerVisibility} />
      <$.Accept onClick={() => handleClick("accept")}>
        Kúpiť celú sériu
      </$.Accept>
      <$.Reject onClick={() => handleClick("reject")}>
        Ďakujem, chcem len 1 obraz
      </$.Reject>
    </>
  );
};

export default AddToCart;
