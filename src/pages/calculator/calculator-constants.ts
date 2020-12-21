import GoblinTrapper from '../../assets/goblin-trapper-icon.png';
import GoblinShaman from '../../assets/goblin-shaman-icon.png';

export enum EIcons {
  GoblinTrapper="GoblinTrapper",
  GoblinShaman="GoblinShaman",
}

export type TIcons = keyof typeof EIcons;

export const IconsPath = {
  [EIcons.GoblinTrapper]: GoblinTrapper,
  [EIcons.GoblinShaman]: GoblinShaman,
}
