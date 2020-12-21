import * as React from "react";
import {CreaturesProperties, TIcons} from "../calculator-constants";
import {getGoblinProbabilities, getGoblinsN, getTargetN} from "./results-utils";
import {Error, ResultMain} from "./result-styled";

type TProps = {
  target: TIcons;
  targetCount: number;
  unit: TIcons;
  unitCount: number;
};

export const Results = React.memo((props: TProps) => {
  if (
    Number.isNaN(props.targetCount)
    || Number.isNaN(props.unitCount)
    || props.unitCount < 0
    || props.targetCount < 0
  ) {
    return (
      <Error>Введено некорректное значение</Error>
    )
  }

  /**
   * Свойства цели
   */
  const targetProperty = CreaturesProperties[props.target];

  /**
   * Очки сравнения гоблинов
   */
  const goblinsN = getGoblinsN(props.unitCount);

  /**
   * Очки сравнения цели
   */
  const targetN = getTargetN(
    targetProperty.Level,
    targetProperty.Rank,
    props.targetCount,
    targetProperty.WeeklyGrow,
  );

  /**
   * Шансы гоблинских проклятий
   */
  const probabilities = getGoblinProbabilities(goblinsN, targetN);

  return (
    <ResultMain>
      <h2>Установка капкана</h2>
      <p>{probabilities.positive}% - Отряд остановится</p>
      <p>{probabilities.semiPositive}% - Отряд пройдет на две клетки меньше, чем должен был</p>
      <p>{probabilities.semiNegative}% - Отряд пройдет на одну клетку меньше, чем должен был</p>
      <p>{probabilities.negative}% - Ловушка сработает преждевременно и гоблинов отбросит в начало АТВ-шкалы</p>
    </ResultMain>
  )
});
