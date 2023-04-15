import React from "react";
import { useNewbornStore } from "../PosterStore";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper";
import * as $ from "./NewbornPoster2.styled";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import PosterMain from "../PosterMain";
import PosterCollection from "../PosterCollection";
import MobileNav from "./MobileNav";
import BackButton from "./BackButton";
import AddToCart from "./AddToCart";

SwiperCore.use([EffectCoverflow]);

const NewbornPoster2 = () => {
  const { size } = useNewbornStore((state) => state);

  const getOldPrice = () => {
    return size === "a4" ? 8 * 3 : 13 * 3;
  };

  const getNewPrice = () => {
    const oldPrice = getOldPrice();
    return Math.round(oldPrice * 0.7 * 100) / 100;
  };

  const addToCart = (type) => {};

  return (
    <$.Page>
      <BackButton />
      <MobileNav step={2} />
      <$.TitleWrap>
        <$.Title>
          Kúp si celú sériu 3 obrazov a
          <$.TitleHighlight> ušetri až 30% </$.TitleHighlight>z celkovej ceny
        </$.Title>
      </$.TitleWrap>
      <$.PostersWrap>
        <$.PostersMobile>
          <Swiper
            initialSlide={1}
            navigation
            pagination={{ clickable: true }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 50,
              depth: 90,
              modifier: 1,
              slideShadows: false,
            }}
            slidesPerView={1.7}
            centeredSlides
          >
            <SwiperSlide>
              <PosterCollection order={0} />
            </SwiperSlide>
            <SwiperSlide>
              <PosterMain isSwiper={false} isMain={false} />
            </SwiperSlide>
            <SwiperSlide>
              <PosterCollection order={1} />
            </SwiperSlide>
          </Swiper>
        </$.PostersMobile>
        <$.PostersLaptop>
          <PosterCollection order={0} />
          <PosterMain isSwiper={false} isMain={false} />
          <PosterCollection order={1} />
        </$.PostersLaptop>
      </$.PostersWrap>
      <$.Content>
        <$.PriceTitle>
          Zvýhodnená cena za 3 obrazy vo formáte{" "}
          <$.PriceSize>{size}</$.PriceSize>
        </$.PriceTitle>
        <$.PriceWrap>
          <$.OldPrice>{getOldPrice()}€</$.OldPrice>
          <$.NewPrice>{getNewPrice()}€</$.NewPrice>
        </$.PriceWrap>
        <AddToCart />
        {/* <$.AddToCart>Kúpiť celú sériu</$.AddToCart>
        <$.Reject>Ďakujem, chcem len 1 obraz</$.Reject> */}
      </$.Content>
    </$.Page>
  );
};

export default NewbornPoster2;
