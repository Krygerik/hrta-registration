import * as React from 'react';
import {filter, map } from 'lodash';
import {Image, Modal} from "semantic-ui-react";
import {
  CreaturesProperties,
  ECreaturesProperties,
  EEntities,
  TAllEntityProps,
  TEntitiesKeys,
  UNITS_CAN_USE_SPECIAL_ABILITIES
} from "../calculator-constants";
import {AllFractionTierList, OneTierEntitiesList} from "./select-icon-styled";

type TProps = {
  changeIcon: any;
  icon: TEntitiesKeys;
  isUnit?: boolean;
  unit: TEntitiesKeys;
};

/**
 * Компонент отображения иконки Атакующего/Атакуемого существа/героя с возможностью выбора другого
 */
export const SelectIcon = (props: TProps) => {
  const [isOpen, setOpen] = React.useState(false);

  /**
   * Обработчик смены Атакующего/Атакуемого существа/героя
   */
  const handleClickIcon = () => {
    setOpen(true)
  }

  /**
   * Получение списка существ 2 грейда всех фракций (Включая героев и нейтральных)
   */
  const getAllEntityList = (): TEntitiesKeys[][] => {
    const allEntityList = [];

    /**
     * Гоблин шаман имеет возможность применять заклинания на героев
     */
    if (props.unit === EEntities.GoblinShaman) {
      allEntityList.push([EEntities.Ora]);

      /**
       * Собираем массив характеристик для всех существ-колдунов 2 тира
       */
      const allWizardsProps: Array<TAllEntityProps> = filter(
        CreaturesProperties,
        (value: TAllEntityProps) => !value.isHero && value[ECreaturesProperties.Wizard] === true,
      );

      /**
       * Формирует из массива характеристик, массив ключей все существ 2 тира
       */
      const allWizardsKeysTier2: Array<TEntitiesKeys> = map(
        allWizardsProps,
        (value: TAllEntityProps) => value[ECreaturesProperties.Key],
      );

      allEntityList.push(allWizardsKeysTier2);
    }

    /**
     * Траппер может действовать на всех нелетающих существ
     */
    if (props.unit === EEntities.GoblinTrapper) {
      /**
       * Собираем массив характеристик для всех существ 2 тира (Актуально, если добавлены только Орки)
       */
      const allPropsTier2: Array<TAllEntityProps> = filter(
        CreaturesProperties,
        (value: TAllEntityProps) => (
          !value.isHero
          && value[ECreaturesProperties.Tier] === 2
          && value[ECreaturesProperties.Flying] !== true
        ),
      );

      /**
       * Формирует из массива характеристик, массив ключей все существ 2 тира
       */
      const allKeysTier2: Array<TEntitiesKeys> = map(
        allPropsTier2,
        (value: TAllEntityProps) => value[ECreaturesProperties.Key],
      );

      allEntityList.push(allKeysTier2);
    }

    return allEntityList;
  }

  /**
   * Существа, которые можно выбрать в модалке
   */
  const allFractionsUnitsKeysList = props.isUnit
    ? UNITS_CAN_USE_SPECIAL_ABILITIES
    : getAllEntityList();

  return (
    <>
      <Image
        src={CreaturesProperties[props.icon][ECreaturesProperties.Icon]}
        onClick={handleClickIcon}
      />
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={isOpen}
      >
        <AllFractionTierList>
          {
            map(allFractionsUnitsKeysList, (fractionUnitsKeysList: TEntitiesKeys[], index: number) => (
              <OneTierEntitiesList key={index}>
                {
                  map(fractionUnitsKeysList, (unitKey: TEntitiesKeys) => (
                    <Image
                      key={unitKey}
                      src={CreaturesProperties[unitKey][ECreaturesProperties.Icon]}
                      onClick={() => {
                        props.changeIcon(unitKey);
                        setOpen(false);
                      }}
                    />
                  ))
                }
              </OneTierEntitiesList>
            ))
          }
        </AllFractionTierList>
      </Modal>
    </>
  );
}
