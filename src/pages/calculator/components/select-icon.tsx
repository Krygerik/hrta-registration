import * as React from 'react';
import {filter, flow, forEach, map} from 'lodash';
import {Image, Modal} from "semantic-ui-react";
import {
  CreaturesProperties,
  ECreaturesProperties,
  EEntities,
  EFraction,
  EHeroes,
  EHeroesProps,
  heroAndCreaturesProps,
  TCreaturesProps,
  UNITS_CAN_USE_SPECIAL_ABILITIES
} from "../calculator-constants";
import {AllFractionTierList, OneTierEntitiesList} from "./select-icon-styled";

type TProps = {
  changeIcon: any;
  icon: EEntities | EHeroes;
  isUnit?: boolean;
  unit: EEntities;
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
  };

  /**
   * Получение списка всех сущетсв фракции
   */
  const getAllUnitsListByFraction = (fraction: EFraction): TCreaturesProps[] => filter(
    Object.values(CreaturesProperties),
    { [ECreaturesProperties.Fraction]: fraction},
  );

  /**
   * Исключение существ всех тиров, кроме 2
   */
  const filterNotTier2Units = (entityList: TCreaturesProps[]): TCreaturesProps[] => filter(
    entityList,
    { [ECreaturesProperties.Tier]: 2},
  );

  /**
   * Исключает летающих юнитов из коллекции
   */
  const filterFlyingUnits = (entityList: TCreaturesProps[]): TCreaturesProps[] => filter(
    entityList,
    (value: TCreaturesProps) => value[ECreaturesProperties.Flying] !== true,
  );

  /**
   * Фильтр летающих юнитов
   */
  const filterNotWizardUnits = (entityList: TCreaturesProps[]): TCreaturesProps[] => filter(
    entityList,
    { [ECreaturesProperties.Wizard]: true },
  );

  /**
   * Получение списка ключей из списка свойств
   */
  const getKeyListFromPropsList = (propList: TCreaturesProps[]): EEntities[] => map(
    propList,
    (props) => props[ECreaturesProperties.Key]
  );

  /**
   * Получение списка существ 2 грейда всех фракций (Включая героев и нейтральных)
   */
  const getAllEntityList = (): (EEntities | EHeroes)[][] => {
    const allEntityList = [];

    /**
     * Гоблин шаман имеет возможность применять заклинания на героев
     */
    if (props.unit === EEntities.GoblinShaman) {
      allEntityList.push([EHeroes.Ora]);

      forEach(
        Object.values(EFraction),
        fraction => (
          allEntityList.push(
            flow([
              getAllUnitsListByFraction,
              filterNotTier2Units,
              filterNotWizardUnits,
              getKeyListFromPropsList,
            ])(fraction)
          )
        )
      );
    }

    /**
     * Траппер может действовать на всех нелетающих существ
     */
    if (props.unit === EEntities.GoblinTrapper) {
      forEach(
        Object.values(EFraction),
        fraction => (
          allEntityList.push(
            flow([
              getAllUnitsListByFraction,
              filterNotTier2Units,
              filterFlyingUnits,
              getKeyListFromPropsList,
            ])(fraction)
          )
        )
      )
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
        src={heroAndCreaturesProps[props.icon][EHeroesProps.Icon]}
        onClick={handleClickIcon}
      />
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={isOpen}
      >
        <AllFractionTierList>
          {
            map(allFractionsUnitsKeysList, (fractionUnitsKeysList: (EHeroes | EEntities)[], index: number) => (
              <OneTierEntitiesList key={index}>
                {
                  map(fractionUnitsKeysList, (unitKey: EHeroes | EEntities) => (
                    <Image
                      key={unitKey}
                      src={heroAndCreaturesProps[unitKey][ECreaturesProperties.Icon]}
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
