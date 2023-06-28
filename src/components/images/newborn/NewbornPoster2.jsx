import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNewbornStore } from "../PosterStore";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
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
  const { pathname } = useLocation();
  const { size } = useNewbornStore((state) => state);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const getOldPrice = () => {
    return size === "a4" ? 8 * 3 : 13 * 3;
  };

  const getNewPrice = () => {
    return size === "a4" ? 8 * 2 : 13 * 2;
  };

  return (
    <$.Page>
      <BackButton />
      <MobileNav step={2} />
      <$.TitleWrap>
        <$.Title>
          Kúp si celú sériu 3 obrazov a 1 máš
          <$.TitleHighlight>ZADARMO</$.TitleHighlight>.
        </$.Title>
      </$.TitleWrap>
      <$.PostersWrap>
        <$.PostersMobile>
          <Swiper
            modules={[Pagination, Navigation]}
            initialSlide={1}
            navigation={true}
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
      </$.Content>
    </$.Page>
  );
};

export default NewbornPoster2;
