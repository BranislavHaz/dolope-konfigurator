import { formatNumber2Decimals } from "lib/formatNumbers";
import { formatdDateLocal } from "lib/formatDates";
import { useNewbornStore } from "../PosterStore";

import "assets/images/newborn/PosterView.css";
import * as $ from "./PosterView.styled";

// Icons
import IconDate from "./IconDate";
import IconTime from "./IconTime";
import IconWeight from "./iconWeight";
import IconLength from "./iconLength";

// Images
import zajkoslietadlom from "assets/images/newborn/imgZajkoSLietadlom.png";

const PosterView = () => {
  const name = useNewbornStore((state) => state.name);
  const date = useNewbornStore((state) => state.date);
  const time = useNewbornStore((state) => state.time);
  const weight = useNewbornStore((state) => state.weight);
  const length = useNewbornStore((state) => state.length);
  const text = useNewbornStore((state) => state.text);
  const font = useNewbornStore((state) => state.font);
  const backgroundColor = useNewbornStore((state) => state.backgroundColor);
  const mainColor = useNewbornStore((state) => state.mainColor);
  const borderColor = useNewbornStore((state) => state.borderColor);
  const frame = useNewbornStore((state) => state.frame);

  return (
    <$.PosterView backgroundColor={backgroundColor} font={font}>
      <$.Frame isActive={frame}>
        <$.PosterWrap>
          <$.TopContent>
            <$.MainImage src={zajkoslietadlom} alt="Vlastný obrázok" />
          </$.TopContent>
          <$.BottomContent>
            <$.Name textColor={mainColor}>{name}</$.Name>
            <$.ElementsWrap>
              <$.Element borderColor={borderColor}>
                <$.ElementIcon>
                  <IconDate color={mainColor} />
                </$.ElementIcon>
                <$.ElementText>
                  <$.Subtitle>Dátum</$.Subtitle>
                  <$.EditableText>{formatdDateLocal(date)}</$.EditableText>
                </$.ElementText>
              </$.Element>
              <$.Element borderColor={borderColor}>
                <$.ElementText>
                  <$.Subtitle>Čas</$.Subtitle>
                  <$.EditableText>{time}</$.EditableText>
                </$.ElementText>
                <$.ElementIcon>
                  <IconTime color={mainColor} />
                </$.ElementIcon>
              </$.Element>
              <$.Element borderColor={borderColor}>
                <$.ElementIcon>
                  <IconWeight color={mainColor} />
                </$.ElementIcon>
                <$.ElementText>
                  <$.Subtitle>Váha</$.Subtitle>
                  <$.EditableText>{`${formatNumber2Decimals(
                    weight
                  )} kg`}</$.EditableText>
                </$.ElementText>
              </$.Element>
              <$.Element borderColor={borderColor}>
                <$.ElementText>
                  <$.Subtitle>Dĺžka</$.Subtitle>
                  <$.EditableText>{`${length} cm`}</$.EditableText>
                </$.ElementText>
                <$.ElementIcon>
                  <IconLength color={mainColor} />
                </$.ElementIcon>
              </$.Element>
            </$.ElementsWrap>
            <$.CustomText>{text}</$.CustomText>
          </$.BottomContent>
        </$.PosterWrap>
      </$.Frame>
    </$.PosterView>
  );
};

export default PosterView;
