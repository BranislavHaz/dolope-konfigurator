import React from "react";
import { useNewbornStore } from "components/images/PosterStore";

import kidsCollection1 from "assets/images/newborn/kids-collection1.png";
import kidsCollection2 from "assets/images/newborn/kids-collection2.png";

const imageCollection = [[kidsCollection1, kidsCollection2]];

const ImagesCollection = ({ order }) => {
  const { indexImage } = useNewbornStore((state) => state);

  return <img src={imageCollection[indexImage][order]} />;
};

export default ImagesCollection;
