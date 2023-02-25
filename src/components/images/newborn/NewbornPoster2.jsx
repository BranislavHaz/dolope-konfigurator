import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper";
import * as $ from "./NewbornPoster2.styled";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import PosterMain from "../PosterMain";
import AddToCart from "./AddToCart";

SwiperCore.use([EffectCoverflow]);

const NewbornPoster2 = () => {
  return (
    <$.Page>
      <$.TitleWrap>
        <$.Title>
          Kúp si celú sériu 3 obrazov a
          <$.TitleHighlight> ušetri až 30%</$.TitleHighlight> z celkovej ceny
        </$.Title>
      </$.TitleWrap>
      <$.PostersWrap>
        <Swiper
          initialSlide={1}
          navigation
          clickable
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
            <PosterMain isSwiper={false} isMain={false} />
          </SwiperSlide>
          <SwiperSlide>
            <PosterMain isSwiper={false} isMain={false} />
          </SwiperSlide>
          <SwiperSlide>
            <PosterMain isSwiper={false} isMain={false} />
          </SwiperSlide>
        </Swiper>
      </$.PostersWrap>
      <$.Content>
        <$.PriceTitle>Zvýhodnená cena za všetky 3 obrazy zo série</$.PriceTitle>
        <$.PriceWrap>
          <$.OldPrice>39€</$.OldPrice>
          <$.NewPrice>27,3€</$.NewPrice>
        </$.PriceWrap>
        <$.AddToCart>Pridať do košíka</$.AddToCart>
        <$.Reject>Ďakujem, nemám záujem</$.Reject>
      </$.Content>
    </$.Page>
  );
};

export default NewbornPoster2;
