import React from "react";
import { useNewbornStore } from "components/images/PosterStore";

import kidsCollection1 from "assets/images/newborn/kids-collection1.png";
import kidsCollection2 from "assets/images/newborn/kids-collection2.png";
import newbornGirl1 from "assets/images/newborn/newborn-girl1.png";
import newbornGirl2 from "assets/images/newborn/newborn-girl2.png";
import newbornBoho1 from "assets/images/newborn/newborn-boho1.png";
import newbornBoho2 from "assets/images/newborn/newborn-boho2.png";
import traffic1 from "assets/images/newborn/traffic1.png";
import traffic2 from "assets/images/newborn/traffic2.png";
import safari1 from "assets/images/newborn/safari1.png";
import safari2 from "assets/images/newborn/safari2.png";
import bunny1 from "assets/images/newborn/bunny1.png";
import bunny2 from "assets/images/newborn/bunny2.png";
import newborn1 from "assets/images/newborn/newborn1.png";
import newborn2 from "assets/images/newborn/newborn2.png";
import baby1 from "assets/images/newborn/baby1.png";
import baby2 from "assets/images/newborn/baby2.png";
import indian1 from "assets/images/newborn/indian1.png";
import indian2 from "assets/images/newborn/indian2.png";
import owl1 from "assets/images/newborn/owl1.png";
import owl2 from "assets/images/newborn/owl2.png";
import sky1 from "assets/images/newborn/sky1.png";
import sky2 from "assets/images/newborn/sky2.png";

const imageCollection = [
  [kidsCollection1, kidsCollection2],
  [newbornGirl1, newbornGirl2],
  [newbornBoho1, newbornBoho2],
  [traffic1, traffic2],
  [safari1, safari2],
  [bunny1, bunny2],
  [newborn1, newborn2],
  [baby1, baby2],
  [indian1, indian2],
  [owl1, owl2],
  [sky1, sky2],
];

const ImagesCollection = ({ order }) => {
  const { indexImage } = useNewbornStore((state) => state);

  return <img src={imageCollection[indexImage][order]} />;
};

export default ImagesCollection;
