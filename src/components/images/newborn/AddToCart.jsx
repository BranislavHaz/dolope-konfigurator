import React from "react";
import format from "date-fns/format";
import axios from "axios";
import { useNewbornStore } from "../PosterStore";
import { formatIndexImage } from "lib/formatIndexImage";
import { localizeText } from "lib/formatColors";

import * as $ from "./AddToCart.styled";

const AddToCart = () => {
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
  } = useNewbornStore((state) => state);

  const imageData = {
    "Typ obrazu": formatIndexImage(indexImage),
    Meno: name,
    "Dátum narodenia": format(new Date(date), "dd.MM.yyyy"),
    "Čas narodenia": time,
    Váha: `${weight.toString().replace(/\./g, ",")} kg`,
    Dĺžka: `${length} cm`,
    "Vlastný text": text,
    "Farba pozadia": localizeText(backgroundColor),
    "Hlavná farba": localizeText(mainColor),
    "Font písma": font,
    Orámovanie: frame ? "áno" : "nie",
  };

  const handleClick = (type) => {
    axios
      .post(
        "https://dolope.sk/wp-json/cocart/v2/cart/add-item",
        {
          id: size === "a4" ? "1662" : "1663",
          quantity: "1",
          item_data: {
            my_data: {
              ...imageData,
              "Celá séria": type === "accept" ? "áno" : "nie",
            },
          },
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
      .then((resp) => {
        console.log(resp.data);
        return resp.data;
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
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
