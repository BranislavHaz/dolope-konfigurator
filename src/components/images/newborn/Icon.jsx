import React from "react";
import { ReactComponent as IconDate } from "assets/icons/iconDate.svg";
import { ReactComponent as IconLength } from "assets/icons/iconLength.svg";
import { ReactComponent as IconTime } from "assets/icons/iconTime.svg";
import { ReactComponent as IconWeight } from "assets/icons/iconWeight.svg";
import { ReactComponent as IconSize } from "assets/icons/iconSizes.svg";
import { ReactComponent as IconData } from "assets/icons/iconData.svg";
import { ReactComponent as IconColor } from "assets/icons/iconColors.svg";
import { ReactComponent as IconFont } from "assets/icons/iconFonts.svg";
import { ReactComponent as IconLogo } from "assets/logos/logo-dolope.svg";
import { ReactComponent as IconPrice } from "assets/icons/iconPrice.svg";
import { ReactComponent as IconPreview } from "assets/icons/iconPreview.svg";

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
    case "preview":
      return <IconPreview fill={color} />;
    default:
      break;
  }
};

export default Icon;
