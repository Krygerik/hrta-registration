import GoblinTrapper from '../../assets/goblin-trapper-icon.png';
// import GoblinShaman from '../../assets/goblin-shaman-icon.png';
import NomadCentaur from '../../assets/nomad-centaur.png';
import Warmonger from '../../assets/varmounger.png';
import DaughtersOfHeaven from '../../assets/docher-neba.png';
import Executioner from '../../assets/palach.png';
import Wyvern from '../../assets/viverna.png';
import Cyclops from '../../assets/ciklop.png';

/**
 * Перечисление всех доступных существ
 */
export enum EIcons {
  // Гоблин Траппер
  GoblinTrapper="GoblinTrapper",
  // Гоблин Шаман
  // GoblinShaman="GoblinShaman",
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

export type TIcons = keyof typeof EIcons;

/**
 * Маппинг ключей существ на иконки
 */
export const IconsPath = {
  [EIcons.GoblinTrapper]: GoblinTrapper,
  // [EIcons.GoblinShaman]: GoblinShaman,
  [EIcons.NomadCentaur]: NomadCentaur,
  [EIcons.Warmonger]: Warmonger,
  [EIcons.DaughtersOfHeaven]: DaughtersOfHeaven,
  [EIcons.Executioner]: Executioner,
  [EIcons.Wyvern]: Wyvern,
  [EIcons.Cyclops]: Cyclops,
}

/**
 * Перечисление свойств существа
 */
export enum ECreaturesProperties {
  // Уровень существа в замке
  Level="Level",
  // Уровень грейда
  Rank="Rank",
  // Еженедельный прирост
  WeeklyGrow="WeeklyGrow",
}

/**
 * Маппинг ключей существ на их характеристики
 */
export const CreaturesProperties = {
  [EIcons.GoblinTrapper]: {
    [ECreaturesProperties.Level]: 1,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 25,
  },
  // [EIcons.GoblinShaman]: {
  //   [ECreaturesProperties.Level]: 1,
  //   [ECreaturesProperties.Rank]: 1,
  //   [ECreaturesProperties.WeeklyGrow]: 25,
  // },
  [EIcons.NomadCentaur]: {
    [ECreaturesProperties.Level]: 2,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 14,
  },
  [EIcons.Warmonger]: {
    [ECreaturesProperties.Level]: 3,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 11,
  },
  [EIcons.DaughtersOfHeaven]: {
    [ECreaturesProperties.Level]: 4,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 5,
  },
  [EIcons.Executioner]: {
    [ECreaturesProperties.Level]: 5,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 5,
  },
  [EIcons.Wyvern]: {
    [ECreaturesProperties.Level]: 6,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 2,
  },
  [EIcons.Cyclops]: {
    [ECreaturesProperties.Level]: 7,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 1,
  },
};
