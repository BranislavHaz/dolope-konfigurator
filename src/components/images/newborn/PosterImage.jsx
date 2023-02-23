import React from "react";
import { useNewbornStore } from "../PosterStore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import * as $ from "./PosterImage.styled";

import "swiper/css";
import "swiper/css/navigation";

// Images
import zajkoLietadlo from "assets/images/newborn/zajko-lietadlo.png";
import zirafaOblaciky from "assets/images/newborn/zirafa-oblaciky.png";
import korytnackaOcean from "assets/images/newborn/korytnacka-ocean.png";
import liskaMesiacik from "assets/images/newborn/liska-mesiacik.png";
import mackoLietadlo from "assets/images/newborn/macko-lietadlo.png";
import mackoVrtulnik from "assets/images/newborn/macko-vrtulnik.png";
import myskaBalon from "assets/images/newborn/myska-balon.png";
import myskaBalonik from "assets/images/newborn/myska-balonik.png";
import slonikPocasie from "assets/images/newborn/slonik-pocasie.png";
import zirafaLietadlo from "assets/images/newborn/zirafa-lietadlo.png";
import jednorozecRuze from "assets/images/newborn/jednorozec-ruze.png";
import jelenica from "assets/images/newborn/jelenica.png";
import liskaMesiacik2 from "assets/images/newborn/liska-mesiacik2.png";
import macickaBalonik from "assets/images/newborn/macicka-balonik.png";
import macickaHrncek from "assets/images/newborn/macicka-hrncek.png";
import mackoBaloniky from "assets/images/newborn/macko-baloniky.png";
import mackoBaloniky2 from "assets/images/newborn/macko-baloniky2.png";
import medvedicaKabelka from "assets/images/newborn/medvedica-kabelka.png";
import psik from "assets/images/newborn/psik.png";
import slonikBaloniky from "assets/images/newborn/slonik-baloniky.png";
import jednorozecHlava from "assets/images/newborn/jednorozec-hlava.png";
import jednorozecUsi from "assets/images/newborn/jednorozec-usi.png";
import koala from "assets/images/newborn/koala.png";
import kocurLodka from "assets/images/newborn/kocur-lodka.png";
import myskaMotylik from "assets/images/newborn/myska-motylik.png";
import velrybaFialova from "assets/images/newborn/velryba-fialova.png";
import velrybaMagic from "assets/images/newborn/velryba-magic.png";
import zajkoBaloniky from "assets/images/newborn/zajko-baloniky.png";
import zajkoHviezdicky from "assets/images/newborn/zajko-hviezdicky.png";
import zajkoLietadlo2 from "assets/images/newborn/zajko-lietadlo2.png";
import zajkoUsiak from "assets/images/newborn/zajko-usiak.png";
import zirafaSuperman from "assets/images/newborn/zirafa-superman.png";
import jelenHlava from "assets/images/newborn/jelen-hlava.png";
import lanHlava from "assets/images/newborn/lan-hlava.png";
import kuriatkoHracka from "assets/images/newborn/kuriatko-hracka.png";
import psikHracka from "assets/images/newborn/psik-hracka.png";
import zajkoHracka from "assets/images/newborn/zajko-hracka.png";
import hrad from "assets/images/newborn/hrad.png";
import dievcatkoHlavicka from "assets/images/newborn/dievcatko-hlavicka.png";
import chlapecHlavicka from "assets/images/newborn/chlapec-hlavicka.png";
import dievcatkoKlobucik from "assets/images/newborn/dievcatko-klobucik.png";
import dievcatkoMacko from "assets/images/newborn/dievcatko-macko.png";
import dievcatkoRysave from "assets/images/newborn/dievcatko-rysave.png";
import chlapecOblecenie from "assets/images/newborn/chlapec-oblecenie.png";
import dievcatkoOblecenie from "assets/images/newborn/dievcatko-oblecenie.png";
import dievcatkoTopanocky from "assets/images/newborn/dievcatko-topanocky.png";
import kidsCollection from "assets/images/newborn/kids-collection.png";

export const mainImagesArr = [
  zajkoLietadlo,
  zirafaOblaciky,
  korytnackaOcean,
  liskaMesiacik,
  mackoLietadlo,
  mackoVrtulnik,
  myskaBalon,
  myskaBalonik,
  slonikPocasie,
  zirafaLietadlo,
  jednorozecRuze,
  jelenica,
  liskaMesiacik2,
  macickaBalonik,
  macickaHrncek,
  mackoBaloniky,
  mackoBaloniky2,
  medvedicaKabelka,
  psik,
  slonikBaloniky,
  jednorozecHlava,
  jednorozecUsi,
  koala,
  kocurLodka,
  myskaMotylik,
  velrybaFialova,
  velrybaMagic,
  zajkoBaloniky,
  zajkoHviezdicky,
  zajkoLietadlo2,
  zajkoUsiak,
  zirafaSuperman,
  jelenHlava,
  lanHlava,
  kuriatkoHracka,
  psikHracka,
  zajkoHracka,
  hrad,
  dievcatkoHlavicka,
  chlapecHlavicka,
  dievcatkoKlobucik,
  dievcatkoMacko,
  dievcatkoRysave,
  chlapecOblecenie,
  dievcatkoOblecenie,
  dievcatkoTopanocky,
  kidsCollection,
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
