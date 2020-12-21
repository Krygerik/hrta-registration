import * as React from "react";
import { Label } from "semantic-ui-react";
import {TIcons} from "../calculator-constants";

type TProps = {
  unit: TIcons;
};

export const Results = React.memo((props: TProps) => {
  return (
    <>
      <Label
        content="Установка капкана"
      />
      <ul>
        <li>{} - Отряд остановится</li>
        <li>Отряд пройдет на две клетки меньше, чем должен был</li>
        <li>Отряд пройдет на одну клетку меньше, чем должен был</li>
        <li>Ловушка сработает преждевременно и гоблинов отбросит в начало АТВ-шкалы</li>
      </ul>
    </>
  )
});
