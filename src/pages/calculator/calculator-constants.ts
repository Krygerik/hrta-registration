// Academy
import Archmage from '../../assets/academy/archmage.png';
import ObsidianGarg from '../../assets/academy/obsidian-gargoyle.png';
import RajaRakshas from '../../assets/academy/raja-rakshas.png';
import SeniorGremlin from '../../assets/academy/senior-gremlin.png';
import SteelGolem from '../../assets/academy/steel-golem.png';
import SultanOfJinn from '../../assets/academy/sultan-of-jinn.png';
import Titanium from '../../assets/academy/titanium.png';
// Horde
import GoblinTrapper from '../../assets/horde/goblin-trapper-icon.png';
import GoblinShaman from '../../assets/horde/goblin-shaman-icon.png';
import NomadCentaur from '../../assets/horde/nomad-centaur.png';
import Warmonger from '../../assets/horde/warmonger.png';
import DaughtersOfHeaven from '../../assets/horde/daughter-of-heaven.png';
import Executioner from '../../assets/horde/executioner.png';
import Wyvern from '../../assets/horde/wyvern.png';
import Cyclops from '../../assets/horde/ciclops.png';
// Hero
import Ora from '../../assets/ora.png';

/**
 * Перечисление ключей всех доступных существ
 */
export enum EEntities {
  // Старшие гремлины
  SeniorGremlin="SeniorGremlin",
  // Обсидиановые гаргульи
  ObsidianGarg="ObsidianGarg",
  // Стальные големы
  SteelGolem="SteelGolem",
  // Архимаг
  Archmage="Archmage",
  // Султан Джинов
  SultanOfJinn="SultanOfJinn",
  // Раджа Ракшас
  RajaRakshas="RajaRakshas",
  // Титан
  Titanium="Titanium",
  // Гоблин Траппер
  GoblinTrapper="GoblinTrapper",
  // Гоблин Шаман
  GoblinShaman="GoblinShaman",
  // Кочевой Кентавр
  NomadCentaur="NomadCentaur",
  // Вармонгеры
  Warmonger="Warmonger",
  // Дочери неба
  DaughtersOfHeaven="DaughtersOfHeaven",
  // Палач
  Executioner="Executioner",
  // Виверна
  Wyvern="Wyvern",
  // Циклоп
  Cyclops="Cyclops",
}

/**
 * Перечисление ключей всех героев
 */
export enum EHeroes {
  // Герой Ора
  Ora="Ora",
}

/**
 * Списка ключей существ способных использовать специальные способности (Кастующие)
 */
export const UNITS_CAN_USE_SPECIAL_ABILITIES = [[
  EEntities.GoblinTrapper,
  EEntities.GoblinShaman,
]];

/**
 * Перечисление свойств существа
 */
export enum ECreaturesProperties {
  // (Для отрисовки используем только один грейд, т.к. приросты одинаковые)
  // Уникальный ключ для существа
  Key="Key",
  // Уровень существа в замке
  Level="Level",
  // Очки грейда (0 если не грейд, 1 если грейд)
  Rank="Rank",
  // Еженедельный прирост
  WeeklyGrow="WeeklyGrow",
  // Уровень грейда существа
  Tier="Tier",
  // Иконка
  Icon="Icon",
  // Колдун,
  Wizard="Wizard",
  // Летающий
  Flying="Flying",
  // Фракция существа
  Fraction="Fraction",
  // Это не герой
  isHero="isHero",
}

/**
 * Перечисление фракций
 */
export enum EFraction {
  Academy="Academy",
  Demon="Demon",
  Elves="Elves",
  Gnome="Gnome",
  Horde="Horde",
  Human="Human",
  League="League",
  Necropolis="Necropolis",
  Neutral="Neutral",
}

/**
 * Перечисление свойств героя
 */
export enum EHeroesProps {
  // Уникальный ключ для существа
  Key="Key",
  // Иконка
  Icon="Icon",
  // это герой
  isHero="isHero",
}

/**
 * Тип характеристик героев
 */
export type THeroProps = {
  [EHeroesProps.Key]: EHeroes;
  [EHeroesProps.Icon]: string;
  [EHeroesProps.isHero]: true;
}

/**
 * Маппинг ключей героев на их характеристики
 */
export const HeroProperties: Record<EHeroes, THeroProps> = {
  [EHeroes.Ora]: {
    [EHeroesProps.Key]: EHeroes.Ora,
    [EHeroesProps.Icon]: Ora,
    [EHeroesProps.isHero]: true,
  },
}

/**
 * Тип характеристик существ
 */
export type TCreaturesProps = {
  [ECreaturesProperties.Level]: number;
  [ECreaturesProperties.Rank]: number;
  [ECreaturesProperties.WeeklyGrow]: number;
  [ECreaturesProperties.Key]: EEntities;
  [ECreaturesProperties.Tier]: number;
  [ECreaturesProperties.Icon]: string;
  [ECreaturesProperties.Wizard]?: boolean;
  [ECreaturesProperties.Flying]?: boolean;
  [ECreaturesProperties.Fraction]: EFraction;
  [ECreaturesProperties.isHero]: false;
};

/**
 * Тип характеристик всех существ
 */
export type TCreaturesProperties = Record<EEntities, TCreaturesProps>;

/**
 * Маппинг ключей существ на их характеристики
 */
export const CreaturesProperties: TCreaturesProperties = {
  [EEntities.SeniorGremlin]: {
    [ECreaturesProperties.Key]: EEntities.SeniorGremlin,
    [ECreaturesProperties.Fraction]: EFraction.Academy,
    [ECreaturesProperties.Level]: 1,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 20,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: SeniorGremlin,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.ObsidianGarg]: {
    [ECreaturesProperties.Key]: EEntities.ObsidianGarg,
    [ECreaturesProperties.Fraction]: EFraction.Academy,
    [ECreaturesProperties.Level]: 2,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 14,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: ObsidianGarg,
    [ECreaturesProperties.Flying]: true,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.SteelGolem]: {
    [ECreaturesProperties.Key]: EEntities.SteelGolem,
    [ECreaturesProperties.Fraction]: EFraction.Academy,
    [ECreaturesProperties.Level]: 3,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 9,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: SteelGolem,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.Archmage]: {
    [ECreaturesProperties.Key]: EEntities.Archmage,
    [ECreaturesProperties.Fraction]: EFraction.Academy,
    [ECreaturesProperties.Level]: 4,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 5,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Archmage,
    [ECreaturesProperties.Wizard]: true,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.SultanOfJinn]: {
    [ECreaturesProperties.Key]: EEntities.SultanOfJinn,
    [ECreaturesProperties.Fraction]: EFraction.Academy,
    [ECreaturesProperties.Level]: 5,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 3,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: SultanOfJinn,
    [ECreaturesProperties.Flying]: true,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.RajaRakshas]: {
    [ECreaturesProperties.Key]: EEntities.RajaRakshas,
    [ECreaturesProperties.Fraction]: EFraction.Academy,
    [ECreaturesProperties.Level]: 6,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 2,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: RajaRakshas,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.Titanium]: {
    [ECreaturesProperties.Key]: EEntities.Titanium,
    [ECreaturesProperties.Fraction]: EFraction.Academy,
    [ECreaturesProperties.Level]: 7,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 1,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Titanium,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.GoblinTrapper]: {
    [ECreaturesProperties.Key]: EEntities.GoblinTrapper,
    [ECreaturesProperties.Fraction]: EFraction.Horde,
    [ECreaturesProperties.Level]: 1,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 25,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: GoblinTrapper,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.GoblinShaman]: {
    [ECreaturesProperties.Key]: EEntities.GoblinShaman,
    [ECreaturesProperties.Fraction]: EFraction.Horde,
    [ECreaturesProperties.Level]: 1,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 25,
    [ECreaturesProperties.Tier]: 3,
    [ECreaturesProperties.Icon]: GoblinShaman,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.NomadCentaur]: {
    [ECreaturesProperties.Key]: EEntities.NomadCentaur,
    [ECreaturesProperties.Fraction]: EFraction.Horde,
    [ECreaturesProperties.Level]: 2,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 14,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: NomadCentaur,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.Warmonger]: {
    [ECreaturesProperties.Key]: EEntities.Warmonger,
    [ECreaturesProperties.Fraction]: EFraction.Horde,
    [ECreaturesProperties.Level]: 3,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 11,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Warmonger,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.DaughtersOfHeaven]: {
    [ECreaturesProperties.Key]: EEntities.DaughtersOfHeaven,
    [ECreaturesProperties.Fraction]: EFraction.Horde,
    [ECreaturesProperties.Level]: 4,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 5,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: DaughtersOfHeaven,
    [ECreaturesProperties.Wizard]: true,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.Executioner]: {
    [ECreaturesProperties.Key]: EEntities.Executioner,
    [ECreaturesProperties.Fraction]: EFraction.Horde,
    [ECreaturesProperties.Level]: 5,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 5,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Executioner,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.Wyvern]: {
    [ECreaturesProperties.Key]: EEntities.Wyvern,
    [ECreaturesProperties.Fraction]: EFraction.Horde,
    [ECreaturesProperties.Level]: 6,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 2,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Wyvern,
    [ECreaturesProperties.Flying]: true,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.Cyclops]: {
    [ECreaturesProperties.Key]: EEntities.Cyclops,
    [ECreaturesProperties.Fraction]: EFraction.Horde,
    [ECreaturesProperties.Level]: 7,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 1,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Cyclops,
    [ECreaturesProperties.isHero]: false,
  },
};

/**
 * Перечень всех существ и героев
 */
export const heroAndCreaturesProps: Record<EHeroes, THeroProps> & Record<EEntities, TCreaturesProps> = {
  ...CreaturesProperties,
  ...HeroProperties,
};
