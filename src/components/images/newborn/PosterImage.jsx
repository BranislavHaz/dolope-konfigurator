import React from "react";
import { useNewbornStore } from "../PosterStore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import * as $ from "./PosterImage.styled";

import "swiper/css";
import "swiper/css/navigation";

// Images
import traffic from "assets/images/traffic.png";
import newbornGirl from "assets/images/newborn-girl.png";
import newbornBoho from "assets/images/newborn-boho.png";
import kidsCollection from "assets/images/kids-collection.png";
import safari from "assets/images/safari.png";
import bunny from "assets/images/bunny.png";
import newborn from "assets/images/newborn.png";
import baby from "assets/images/baby.png";
import indian from "assets/images/indian.png";
import owl from "assets/images/owl.png";
import sky from "assets/images/sky.png";

export const mainImagesArr = [
  traffic,
  newbornGirl,
  newbornBoho,
  kidsCollection,
  safari,
  bunny,
  newborn,
  baby,
  indian,
  owl,
  sky,
];

const PosterImage = ({ dimensions, isSwiper }) => {
  const { indexImage, setIndexImage } = useNewbornStore((state) => state);

  return (
    <$.ImageWrap dimensions={dimensions}>
      <Swiper
        initialSlide={indexImage}
        enabled={isSwiper}
        navigation={true}
        modules={[Navigation]}
        rewind={true}
        className="mySwiper"
        onSlideChange={(e) => setIndexImage(e.activeIndex)}
      >
        {mainImagesArr.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <$.MainImage src={image} alt="Vlastný obrázok" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </$.ImageWrap>
  );
};

export default PosterImage;
