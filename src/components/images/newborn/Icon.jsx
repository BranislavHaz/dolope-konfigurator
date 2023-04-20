import React from "react";
import { ReactComponent as IconDate } from "assets/images/newborn/iconDate.svg";
import { ReactComponent as IconLength } from "assets/images/newborn/iconLength.svg";
import { ReactComponent as IconTime } from "assets/images/newborn/iconTime.svg";
import { ReactComponent as IconWeight } from "assets/images/newborn/iconWeight.svg";
import { ReactComponent as IconSize } from "assets/images/newborn/iconSizes.svg";
import { ReactComponent as IconData } from "assets/images/newborn/iconData.svg";
import { ReactComponent as IconColor } from "assets/images/newborn/iconColors.svg";
import { ReactComponent as IconFont } from "assets/images/newborn/iconFonts.svg";
import { ReactComponent as IconLogo } from "assets/images/newborn/logo-dolope-new.svg";
import { ReactComponent as IconPrice } from "assets/images/newborn/iconPrice.svg";

const Icon = ({ icon, color }) => {
  switch (icon) {
    case "date":
      return <IconDate fill={color} />;
    case "length":
      return <IconLength fill={color} />;
    case "time":
      return <IconTime fill={color} />;
    case "weight":
      return <IconWeight fill={color} />;
    case "size":
      return <IconSize fill={color} />;
    case "data":
      return <IconData fill={color} />;
    case "color":
      return <IconColor fill={color} />;
    case "font":
      return <IconFont fill={color} />;
    case "logo":
      return <IconLogo />;
    case "price":
      return <IconPrice />;
    default:
      break;
  }
};

export default Icon;
