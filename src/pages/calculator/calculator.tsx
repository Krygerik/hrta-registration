import * as React from 'react';
import {Grid} from "semantic-ui-react";
import {SelectIcon} from "./components/select-icon";
import {EIcons} from "./calculator-constants";

/**
 * Контроллер калькулятора
 */
export const Calculator = React.memo(() => {
  const [unit, setUnit] = React.useState(EIcons.GoblinTrapper);
  const [target, setTarget] = React.useState(EIcons.GoblinShaman);

  return (
    <Grid celled="internally">
      <Grid.Row>
        <Grid.Column width={4}>
          <SelectIcon
            icon={unit}
            changeIcon={setUnit}
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Results />
        </Grid.Column>
        <Grid.Column width={4}>
          <SelectIcon
            icon={target}
            changeIcon={setTarget}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
});
