import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Posters from "layouts/images/Posters";
import PosterView from "components/images/newborn/PosterView";
import PosterConfig from "components/images/newborn/PosterConfig";

const NewbornPoster = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Posters>
      <PosterView />
      <PosterConfig />
    </Posters>
  );
};

export default NewbornPoster;
