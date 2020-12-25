import * as React from "react";
import {EEntities, EHeroes, heroAndCreaturesProps} from "../calculator-constants";
import {getGoblinProbabilities, getGoblinsN, getHeroN, getTargetN} from "./results-utils";
import {Error, ResultMain} from "./result-styled";

type TProps = {
  target: EEntities | EHeroes;
  targetCount: number;
  unit: EEntities;
  unitCount: number;
  levelCast: number;
  levelHero: number;
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
  const targetProperty = heroAndCreaturesProps[props.target];

  /**
   * Очки сравнения гоблинов
   */
  const goblinsN = getGoblinsN(props.unitCount);

  /**
   * Очки сравнения цели
   */
  let targetN = targetProperty.isHero
    ? getHeroN(
      props.levelHero,
      props.levelCast
    )
    : getTargetN(
      targetProperty.Level,
      targetProperty.Rank,
      props.targetCount,
      targetProperty.WeeklyGrow,
    );

  /**
   * Шансы гоблинских проклятий
   */
  const probabilities = getGoblinProbabilities(goblinsN, targetN);

  if (props.unit === EEntities.GoblinTrapper) {
    return (
      <ResultMain>
        <h2>Установка капкана</h2>
        <p>{probabilities.positive}% - Отряд остановится</p>
        <p>{probabilities.semiPositive}% - Отряд пройдет на две клетки меньше, чем должен был</p>
        <p>{probabilities.semiNegative}% - Отряд пройдет на одну клетку меньше, чем должен был</p>
        <p>{probabilities.negative}% - Ловушка сработает преждевременно и гоблинов отбросит в начало АТВ-шкалы</p>
      </ResultMain>
    )
  }

  return (
    <ResultMain>
      <h2>Порча магии</h2>
      <p>{probabilities.positive}% - Заклинание не сработает</p>
      <p>{probabilities.semiPositive}% - «Колдовство» отряда при расчете эффекта заклинания будет снижено в два раза</p>
      <p>{probabilities.semiNegative}% - Стоимость заклинания удвоится</p>
      <p>{probabilities.negative}% - Гоблины будут отброшены в начало АТВ-шкалы, а если заклинание имеет проклинающий
        или наносящий урон эффект, оно полетит в гоблинов, а заклинатель не потратит ману</p>
    </ResultMain>
  )
});
