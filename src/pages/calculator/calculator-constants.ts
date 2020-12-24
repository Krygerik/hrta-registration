import GoblinTrapper from '../../assets/goblin-trapper-icon.png';
import GoblinShaman from '../../assets/goblin-shaman-icon.png';
import NomadCentaur from '../../assets/nomad-centaur.png';
import Warmonger from '../../assets/warmonger.png';
import DaughtersOfHeaven from '../../assets/daughter-of-heaven.png';
import Executioner from '../../assets/executioner.png';
import Wyvern from '../../assets/wyvern.png';
import Cyclops from '../../assets/ciclops.png';
import Ora from '../../assets/ora.png';

/**
 * Перечисление ключей всех доступных сущностей
 */
export enum EEntities {
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
  // Герой Ора
  Ora="Ora",
}

export type TEntitiesKeys = keyof typeof EEntities;

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
  // Уникальный ключ для существа
  Key="Key",
  // Уровень существа в замке
  Level="Level",
  // Очки грейда (0 если не грейд, 1 если грейд)
  Rank="Rank",
  // Еженедельный прирост
  WeeklyGrow="WeeklyGrow",
  // Уровень грейда существа
  // (Для отрисовки используем только один грейд, т.к. приросты одинаковые)
  Tier="Tier",
  // Это герой
  isHero="isHero",
  // Иконка
  Icon="Icon",
  // Колдун,
  Wizard="Wizard",
  // Летающий
  Flying="Flying",
}

/**
 * Тип характеристик героев
 */
type THeroProps = {
  [ECreaturesProperties.isHero]: true;
  [ECreaturesProperties.Key]: EEntities;
  [ECreaturesProperties.Icon]: string;
}

/**
 * Тип характеристик существ
 */
type TCreaturesProps = {
  [ECreaturesProperties.Level]: number;
  [ECreaturesProperties.Rank]: number;
  [ECreaturesProperties.WeeklyGrow]: number;
  [ECreaturesProperties.Key]: EEntities;
  [ECreaturesProperties.Tier]: number;
  [ECreaturesProperties.isHero]?: boolean;
  [ECreaturesProperties.Icon]: string;
  [ECreaturesProperties.Wizard]?: boolean;
  [ECreaturesProperties.Flying]?: boolean;
};

/**
 * Тип характеристик всех сущностей
 */
export type TAllEntityProps = THeroProps | TCreaturesProps;

export type TCreaturesProperties = Record<TEntitiesKeys, TAllEntityProps>;

/**
 * Маппинг ключей существ на их характеристики
 */
export const CreaturesProperties: TCreaturesProperties = {
  [EEntities.GoblinTrapper]: {
    [ECreaturesProperties.Key]: EEntities.GoblinTrapper,
    [ECreaturesProperties.Level]: 1,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 25,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: GoblinTrapper,
  },
  [EEntities.GoblinShaman]: {
    [ECreaturesProperties.Key]: EEntities.GoblinShaman,
    [ECreaturesProperties.Level]: 1,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 25,
    [ECreaturesProperties.Tier]: 3,
    [ECreaturesProperties.Icon]: GoblinShaman,
  },
  [EEntities.NomadCentaur]: {
    [ECreaturesProperties.Key]: EEntities.NomadCentaur,
    [ECreaturesProperties.Level]: 2,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 14,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: NomadCentaur,
  },
  [EEntities.Warmonger]: {
    [ECreaturesProperties.Key]: EEntities.Warmonger,
    [ECreaturesProperties.Level]: 3,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 11,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Warmonger,
  },
  [EEntities.DaughtersOfHeaven]: {
    [ECreaturesProperties.Key]: EEntities.DaughtersOfHeaven,
    [ECreaturesProperties.Level]: 4,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 5,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: DaughtersOfHeaven,
    [ECreaturesProperties.Wizard]: true,
  },
  [EEntities.Executioner]: {
    [ECreaturesProperties.Key]: EEntities.Executioner,
    [ECreaturesProperties.Level]: 5,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 5,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Executioner,
  },
  [EEntities.Wyvern]: {
    [ECreaturesProperties.Key]: EEntities.Wyvern,
    [ECreaturesProperties.Level]: 6,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 2,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Wyvern,
    [ECreaturesProperties.Flying]: true,
  },
  [EEntities.Cyclops]: {
    [ECreaturesProperties.Key]: EEntities.Cyclops,
    [ECreaturesProperties.Level]: 7,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 1,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Cyclops,
  },
  [EEntities.Ora]: {
    [ECreaturesProperties.Key]: EEntities.Ora,
    [ECreaturesProperties.isHero]: true,
    [ECreaturesProperties.Icon]: Ora,
  },
};
