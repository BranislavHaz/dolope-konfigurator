import React from "react";
import { MainImage } from "./PosterView.styled";
import { useNewbornStore } from "../PosterStore";

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

export const mainImagesObj = {
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
};

export const mainImagesArray = Object.values(mainImagesObj);

const PosterImage = () => {
  const indexImage = useNewbornStore((state) => state.indexImage);
  return <MainImage src={mainImagesArray[indexImage]} alt="Vlastný obrázok" />;
};

export default PosterImage;
