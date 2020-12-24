import * as React from 'react';
import {SelectIcon} from "./components/select-icon";
import {CreaturesProperties, EEntities} from "./calculator-constants";
import {Results} from "./components/results";
import {TextInput} from '../../components/text-input';
import {CalculatorColumn, CalculatorMain} from "./calculator-styled";

/**
 * Контроллер калькулятора
 */
export const Calculator = React.memo(() => {
  const [unit, setUnit] = React.useState(EEntities.GoblinTrapper);
  const [unitCount, setUnitCount] = React.useState(1);
  const [targetCount, setTargetCount] = React.useState(1);
  const [target, setTarget] = React.useState(EEntities.GoblinTrapper);

  const [levelHero, setLevelHero] = React.useState(18);
  const [levelCast, setLevelCast] = React.useState(1);

  return (
    <CalculatorMain>
      <CalculatorColumn
        flexGrow={0}
      >
        <h2>Кастер</h2>
        <SelectIcon
          changeIcon={setUnit}
          icon={unit}
          isUnit={true}
          unit={unit}
        />
        <TextInput
          onChange={(event) => setUnitCount(Number(event.target.value))}
          placeholder="Количество"
          type="number"
        />
      </CalculatorColumn>
      <CalculatorColumn
        flexGrow={1}
      >
        <Results
          target={target}
          targetCount={targetCount}
          unit={unit}
          unitCount={unitCount}
          levelHero={levelHero}
          levelCast={levelCast}
        />
      </CalculatorColumn>
      <CalculatorColumn
        flexGrow={0}
      >
        <h2>Цель</h2>
        <SelectIcon
          changeIcon={setTarget}
          icon={target}
          unit={unit}
        />
        {
          CreaturesProperties[target].isHero
            ? (
              <>
                <TextInput
                  onChange={(event) => setLevelHero(Number(event.target.value))}
                  placeholder="Уровень героя"
                  type="number"
                />
                <TextInput
                  onChange={(event) => setLevelCast(Number(event.target.value))}
                  placeholder="Уровень заклинания"
                  type="number"
                />
              </>
            )
            : (
              <TextInput
                onChange={(event) => setTargetCount(Number(event.target.value))}
                placeholder="Количество"
                type="number"
              />
            )
        }
      </CalculatorColumn>
    </CalculatorMain>
  );
});
