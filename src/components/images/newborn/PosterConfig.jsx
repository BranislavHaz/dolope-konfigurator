import React from "react";
import SectionDivider from "../SectionDivider";
import AddToCart from "./AddToCart";

import { useNewbornStore } from "../PosterStore";

import * as $ from "./PosterConfig.styled";

const PosterConfig = () => {
  const {
    size,
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
    menuActive,
    setSize,
    setName,
    setDate,
    setTime,
    setWeight,
    setLength,
    setText,
    setFont,
    setBackgroundColor,
    setMainColor,
    setFrame,
    setMenuActive,
  } = useNewbornStore((state) => state);

  const handleChangeSwitcher = () => {
    setFrame(!frame);
  };

  return (
    <$.PosterConfig isActive={menuActive}>
      <$.Title>
        <$.Title1Line>Vytvor</$.Title1Line>
        <$.Title2Line>si vlastný dizajn</$.Title2Line>
      </$.Title>
      <SectionDivider
        title="Veľkosť obrazu"
        isActive={menuActive === "size" ? true : false}
      >
        <$.SizeWrap>
          <$.SizeOption onClick={() => setSize("a4")}>
            <$.Size isActive={size === "a4"}>
              A4 (210x297 mm) <$.SizePrice>8€</$.SizePrice>
            </$.Size>
          </$.SizeOption>
          <$.SizeOption onClick={() => setSize("a3")}>
            <$.Size isActive={size === "a3"}>
              A3 (297x420 mm) <$.SizePrice>13€</$.SizePrice>
            </$.Size>
          </$.SizeOption>
        </$.SizeWrap>
      </SectionDivider>
      <SectionDivider
        title="Údaje drobčeka"
        isActive={menuActive === "data" ? true : false}
      >
        <$.Label cursor="text">
          Meno:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </$.Label>
        <$.LabelFlex>
          <$.Label cursor="pointer">
            Dátum:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </$.Label>
          <$.Label cursor="pointer">
            Čas:
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </$.Label>
        </$.LabelFlex>
        <$.LabelFlex>
          <$.Label cursor="text">
            Váha:
            <input
              type="number"
              step="0.01"
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
            />
          </$.Label>
          <$.Label cursor="text">
            Dĺžka:
            <input
              type="text"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </$.Label>
        </$.LabelFlex>
        <$.Label cursor="text">
          Odkaz:
          <textarea
            rows="6"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </$.Label>
      </SectionDivider>
      <SectionDivider
        title="Farebná kombinácia"
        isActive={menuActive === "color" ? true : false}
      >
        <$.Subtitle>Hlavná farba:</$.Subtitle>
        <$.ColorSet>
          <$.Color
            id="blue"
            onClick={(e) => setMainColor(e.target.id)}
            isActive={mainColor === "blue"}
          />
          <$.Color
            id="pink"
            onClick={(e) => setMainColor(e.target.id)}
            isActive={mainColor === "pink"}
          />
          <$.Color
            id="gray"
            onClick={(e) => setMainColor(e.target.id)}
            isActive={mainColor === "gray"}
          />
          <$.Color
            id="beige"
            onClick={(e) => setMainColor(e.target.id)}
            isActive={mainColor === "beige"}
          />
        </$.ColorSet>
        <$.Subtitle>Farba pozadia:</$.Subtitle>
        <$.ColorSet>
          <$.Color
            id="blue"
            onClick={(e) => setBackgroundColor(e.target.id)}
            isActive={backgroundColor === "blue"}
          />
          <$.Color
            id="pink"
            onClick={(e) => setBackgroundColor(e.target.id)}
            isActive={backgroundColor === "pink"}
          />
          <$.Color
            id="gray"
            onClick={(e) => setBackgroundColor(e.target.id)}
            isActive={backgroundColor === "gray"}
          />
          <$.Color
            id="beige"
            onClick={(e) => setBackgroundColor(e.target.id)}
            isActive={backgroundColor === "beige"}
          />
          <$.Color
            id="white"
            onClick={(e) => setBackgroundColor(e.target.id)}
            isActive={backgroundColor === "white"}
          />
        </$.ColorSet>
        <$.Subtitle>Orámovanie:</$.Subtitle>
        <$.SwitcherWrapper>
          <$.SwitcherInput
            id="checkbox"
            type="checkbox"
            onChange={handleChangeSwitcher}
            defaultChecked={true}
          />
          <$.SwitcherLabel htmlFor="checkbox" />
        </$.SwitcherWrapper>
      </SectionDivider>
      <SectionDivider
        title="Typ písma"
        isActive={menuActive === "font" ? true : false}
      >
        <$.FontSet>
          <$.Font
            id="Amatic SC"
            onClick={(e) => setFont(e.target.id)}
            isActive={font === "Amatic SC"}
          >
            {name.split(" ")[0]}
          </$.Font>
          <$.Font
            id="Solitreo"
            onClick={(e) => setFont(e.target.id)}
            isActive={font === "Solitreo"}
          >
            {name.split(" ")[0]}
          </$.Font>
          <$.Font
            id="Bebas Neue"
            onClick={(e) => setFont(e.target.id)}
            isActive={font === "Bebas Neue"}
          >
            {name.split(" ")[0]}
          </$.Font>
          <$.Font
            id="Lobster"
            onClick={(e) => setFont(e.target.id)}
            isActive={font === "Lobster"}
          >
            {name.split(" ")[0]}
          </$.Font>
          <$.Font
            id="Dancing Script"
            onClick={(e) => setFont(e.target.id)}
            isActive={font === "Dancing Script"}
          >
            {name.split(" ")[0]}
          </$.Font>
          <$.Font
            id="Cinzel"
            onClick={(e) => setFont(e.target.id)}
            isActive={font === "Cinzel"}
          >
            {name.split(" ")[0]}
          </$.Font>
        </$.FontSet>
      </SectionDivider>
      <AddToCart />
      <$.CloseMenu isActive={menuActive} onClick={() => setMenuActive(false)} />
    </$.PosterConfig>
  );
};

export default PosterConfig;
