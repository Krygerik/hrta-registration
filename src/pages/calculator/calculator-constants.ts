import GoblinTrapper from '../../assets/goblin-trapper-icon.png';
import GoblinShaman from '../../assets/goblin-shaman-icon.png';

/**
 * Перечисление всех доступных существ
 */
export enum EIcons {
  GoblinShaman="GoblinShaman",
  GoblinTrapper="GoblinTrapper",
}

export type TIcons = keyof typeof EIcons;

/**
 * Маппинг ключей существ на иконки
 */
export const IconsPath = {
  [EIcons.GoblinTrapper]: GoblinTrapper,
  [EIcons.GoblinShaman]: GoblinShaman,
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
    [ECreaturesProperties.Rank]: 2,
    [ECreaturesProperties.WeeklyGrow]: 25,
  },
  [EIcons.GoblinShaman]: {
    [ECreaturesProperties.Level]: 1,
    [ECreaturesProperties.Rank]: 2,
    [ECreaturesProperties.WeeklyGrow]: 25,
  },
};
