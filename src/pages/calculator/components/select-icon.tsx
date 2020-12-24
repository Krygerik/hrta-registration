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
    /**
     * Собираем массив характеристик для всех существ 2 тира (Актуально, если добавлены только Орки)
     */
    const allPropsTier2: Array<TAllEntityProps> = filter(
      CreaturesProperties,
      (value: TAllEntityProps) => !value.isHero && value[ECreaturesProperties.Tier] === 2,
    );

    /**
     * Формирует из массива характеристик, массив ключей все существ 2 тира
     */
    const allKeysTier2: Array<TEntitiesKeys> = map(
      allPropsTier2,
      (value: TAllEntityProps) => value[ECreaturesProperties.Key],
    );

    return [
      // Сначала список героев
      [EEntities.Ora],
      // Списки существ всех фракций
      allKeysTier2,
      // Список нейтральных существ
      // TODO
    ];
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
