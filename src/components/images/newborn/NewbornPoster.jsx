import React from "react";
import Posters from "layouts/images/Posters";
import PosterView from "components/images/newborn/PosterView";
import PosterConfig from "components/images/newborn/PosterConfig";

const NewbornPoster = () => {
  return (
    <Posters>
      <PosterView />
      <PosterConfig />
    </Posters>
  );
};

export default NewbornPoster;
