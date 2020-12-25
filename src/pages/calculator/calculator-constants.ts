// Academy
import Archmage from '../../assets/academy/archmage.png';
import ObsidianGarg from '../../assets/academy/obsidian-gargoyle.png';
import RajaRakshas from '../../assets/academy/raja-rakshas.png';
import SeniorGremlin from '../../assets/academy/senior-gremlin.png';
import SteelGolem from '../../assets/academy/steel-golem.png';
import SultanOfJinn from '../../assets/academy/sultan-of-jinn.png';
import Titanium from '../../assets/academy/titanium.png';
// Demon
import ArchDevil from '../../assets/demon/archdevil.png';
import CaveLord from '../../assets/demon/cave-lord.png';
import Cerben from '../../assets/demon/cerben.png';
import Demon from '../../assets/demon/demon.png';
import Demoness from '../../assets/demon/demoness.png';
import Heck from '../../assets/demon/heck.png';
import Nightmare from '../../assets/demon/nightmare.png';
// Elves
import AncientEnt from '../../assets/elves/ancient-ent.png';
import BattleUnicorn from '../../assets/elves/battle-unicorn.png';
import BowMaster from '../../assets/elves/bow-master.png';
import DancingWithDeath from '../../assets/elves/dancing-with-death.png';
import Dryad from '../../assets/elves/dryad.png';
import EmeraldDragon from '../../assets/elves/emerald-dragon.png';
import HigherDruid from '../../assets/elves/higher-druid.png';
// Gnome
import Berserk from '../../assets/gnome/berserk.png';
import Jarl from '../../assets/gnome/jarl.png';
import LavaDragon from '../../assets/gnome/lava-dragon.png';
import OwnerOfTheBear from '../../assets/gnome/owner-of-the-bear.png';
import PriestOfArcath from '../../assets/gnome/priest-of-arcath.png';
import SpearMaster from '../../assets/gnome/spear-master.png';
import Warrior from '../../assets/gnome/warrior.png';
// Horde
import GoblinTrapper from '../../assets/horde/goblin-trapper-icon.png';
import GoblinShaman from '../../assets/horde/goblin-shaman-icon.png';
import NomadCentaur from '../../assets/horde/nomad-centaur.png';
import Warmonger from '../../assets/horde/warmonger.png';
import DaughtersOfHeaven from '../../assets/horde/daughter-of-heaven.png';
import Executioner from '../../assets/horde/executioner.png';
import Wyvern from '../../assets/horde/wyvern.png';
import Cyclops from '../../assets/horde/ciclops.png';
// Human
import Archangel from '../../assets/human/archangel.png';
import Attic from '../../assets/human/attic.png';
import CrossBowman from '../../assets/human/crossbowman.png';
import Inquisitor from '../../assets/human/inquisitor.png';
import Militia from '../../assets/human/militia.png';
import Paladin from '../../assets/human/paladin.png';
import RoyalGriffon from '../../assets/human/royal-griffon.png';
// League
import Assassin from '../../assets/league/assasin.png';
import BlackDragon from '../../assets/league/black-dragon.png';
import CaveHydra from '../../assets/league/cave-hydra.png';
import DarkHorseman from '../../assets/league/dark-horseman.png';
import Fury from '../../assets/league/fury.png';
import MinotaurGuardian from '../../assets/league/minotaur-guardian.png';
import MistressOfTheShadow from '../../assets/league/mistress-of-the-shadow.png';
// Hecropolis
import ArchiLich from '../../assets/necropolis/archilich.png';
import BoneArcher from '../../assets/necropolis/bone-archer.png';
import DeathMessenger from '../../assets/necropolis/death-messenger.png';
import Ghost from '../../assets/necropolis/ghost.png';
import GhostDragon from '../../assets/necropolis/ghost-dragon.png';
import HigherVampire from '../../assets/necropolis/higher-vampire.png';
import PlagueZombie from '../../assets/necropolis/plague-zombie.png';
// Neutral
import AirElemental from '../../assets/neutral/air-elemental.png';
import DeathKnight from '../../assets/neutral/death-knight.png';
import EarthElemental from '../../assets/neutral/earth-elemental.png';
import FireElemental from '../../assets/neutral/fire-elemental.png';
import Mummy from '../../assets/neutral/mummy.png';
import WaterElemental from '../../assets/neutral/water-elemental.png';
import Wolf from '../../assets/neutral/wolf.png';
// Hero
import Ora from '../../assets/ora.png';

/**
 * Перечисление ключей всех доступных существ
 */
export enum EEntities {
  // Академия Волшебства
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
  // Demon
  // Черт
  Heck="Heck",
  // Огненный демон
  Demon="Demon",
  // Цербер
  Cerben="Cerben",
  // Демонесса
  Demoness="Demoness",
  // Кошмар
  Nightmare="Nightmare",
  // Пещерный владыка
  CaveLord="CaveLord",
  // Архидьявол
  ArchDevil="ArchDevil",
  // Эльф
  // Дриада
  Dryad="Dryad",
  // Танцующий со смертью
  DancingWithDeath="DancingWithDeath",
  // Мастер лука
  BowMaster="BowMaster",
  // Верховный друид
  HigherDruid="HigherDruid",
  // Боевой единорог
  BattleUnicorn="BattleUnicorn",
  // Древний энт
  AncientEnt="AncientEnt",
  // Изумрудный дракон
  EmeraldDragon="EmeraldDragon",
  // Гномы
  // Воитель
  Warrior="Warrior",
  // Мастер копья
  SpearMaster="SpearMaster",
  // Хозяин медведя
  OwnerOfTheBear="OwnerOfTheBear",
  // Берсерк
  Berserk="Berserk",
  // Жрец Арката
  PriestOfArcath="PriestOfArcath",
  // Ярл
  Jarl="Jarl",
  // Лавовый дракон
  LavaDragon="LavaDragon",
  // Орда
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
  // Human
  // Ополченец
  Militia="Militia",
  // Арбалетчик
  CrossBowman="CrossBowman",
  // Латник
  Attic="Attic",
  // Королевский грифон
  RoyalGriffon="RoyalGriffon",
  // Инквизитор
  Inquisitor="Inquisitor",
  // Паладин
  Paladin="Paladin",
  // Архангел
  Archangel="Archangel",
  // Лига теней
  // Ассасин
  Assassin="Assassin",
  // Фурия
  Fury="Fury",
  // Минотавр-страж
  MinotaurGuardian="MinotaurGuardian",
  // Темный всадник
  DarkHorseman="DarkHorseman",
  // Пещерная гидра
  CaveHydra="CaveHydra",
  // Владычица тени
  MistressOfTheShadow="MistressOfTheShadow",
  // Черный дракон
  BlackDragon="BlackDragon",
  // Некрополис
  // Костяной лучник
  BoneArcher="BoneArcher",
  // Чумной зомби
  PlagueZombie="PlagueZombie",
  // Призрак
  Ghost="Ghost",
  // Высший вампир
  HigherVampire="HigherVampire",
  // Архилич
  ArchiLich="ArchiLich",
  // Вестник смерти
  DeathMessenger="DeathMessenger",
  // Призрак дракон
  GhostDragon="GhostDragon",
  // Нейтральные существа
  // Волк
  Wolf="Wolf",
  // Воздушный элем
  AirElemental="AirElemental",
  // Водный элем
  WaterElemental="WaterElemental",
  // Огненный элем
  FireElemental="FireElemental",
  // Земляной элем
  EarthElemental="EarthElemental",
  // Мумия
  Mummy="Mummy",
  // Рыцарь смерти
  DeathKnight="DeathKnight",
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
  // Академия Волшебства
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
  // Инферно
  [EEntities.Heck]: {
    [ECreaturesProperties.Key]: EEntities.Heck,
    [ECreaturesProperties.Fraction]: EFraction.Demon,
    [ECreaturesProperties.Level]: 1,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 16,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Heck,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.Demon]: {
    [ECreaturesProperties.Key]: EEntities.Demon,
    [ECreaturesProperties.Fraction]: EFraction.Demon,
    [ECreaturesProperties.Level]: 2,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 15,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Demon,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.Cerben]: {
    [ECreaturesProperties.Key]: EEntities.Cerben,
    [ECreaturesProperties.Fraction]: EFraction.Demon,
    [ECreaturesProperties.Level]: 3,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 8,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Cerben,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.Demoness]: {
    [ECreaturesProperties.Key]: EEntities.Demoness,
    [ECreaturesProperties.Fraction]: EFraction.Demon,
    [ECreaturesProperties.Level]: 4,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 5,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Demoness,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.Nightmare]: {
    [ECreaturesProperties.Key]: EEntities.Nightmare,
    [ECreaturesProperties.Fraction]: EFraction.Demon,
    [ECreaturesProperties.Level]: 5,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 3,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Nightmare,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.CaveLord]: {
    [ECreaturesProperties.Key]: EEntities.CaveLord,
    [ECreaturesProperties.Fraction]: EFraction.Demon,
    [ECreaturesProperties.Level]: 6,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 2,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: CaveLord,
    [ECreaturesProperties.Wizard]: true,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.ArchDevil]: {
    [ECreaturesProperties.Key]: EEntities.ArchDevil,
    [ECreaturesProperties.Fraction]: EFraction.Demon,
    [ECreaturesProperties.Level]: 7,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 1,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: ArchDevil,
    [ECreaturesProperties.Flying]: true,
    [ECreaturesProperties.isHero]: false,
  },
  // Эльфы
  [EEntities.Dryad]: {
    [ECreaturesProperties.Key]: EEntities.Dryad,
    [ECreaturesProperties.Fraction]: EFraction.Elves,
    [ECreaturesProperties.Level]: 1,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 10,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Dryad,
    [ECreaturesProperties.Flying]: true,
    [ECreaturesProperties.Wizard]: true,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.DancingWithDeath]: {
    [ECreaturesProperties.Key]: EEntities.DancingWithDeath,
    [ECreaturesProperties.Fraction]: EFraction.Elves,
    [ECreaturesProperties.Level]: 2,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 9,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: DancingWithDeath,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.BowMaster]: {
    [ECreaturesProperties.Key]: EEntities.BowMaster,
    [ECreaturesProperties.Fraction]: EFraction.Elves,
    [ECreaturesProperties.Level]: 3,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 7,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: BowMaster,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.HigherDruid]: {
    [ECreaturesProperties.Key]: EEntities.HigherDruid,
    [ECreaturesProperties.Fraction]: EFraction.Elves,
    [ECreaturesProperties.Level]: 4,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 4,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: HigherDruid,
    [ECreaturesProperties.Wizard]: true,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.BattleUnicorn]: {
    [ECreaturesProperties.Key]: EEntities.BattleUnicorn,
    [ECreaturesProperties.Fraction]: EFraction.Elves,
    [ECreaturesProperties.Level]: 5,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 3,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: BattleUnicorn,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.AncientEnt]: {
    [ECreaturesProperties.Key]: EEntities.AncientEnt,
    [ECreaturesProperties.Fraction]: EFraction.Elves,
    [ECreaturesProperties.Level]: 6,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 2,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: AncientEnt,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.EmeraldDragon]: {
    [ECreaturesProperties.Key]: EEntities.EmeraldDragon,
    [ECreaturesProperties.Fraction]: EFraction.Elves,
    [ECreaturesProperties.Level]: 7,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 1,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: EmeraldDragon,
    [ECreaturesProperties.Flying]: true,
    [ECreaturesProperties.isHero]: false,
  },
  // Гномы
  [EEntities.Warrior]: {
    [ECreaturesProperties.Key]: EEntities.Warrior,
    [ECreaturesProperties.Fraction]: EFraction.Gnome,
    [ECreaturesProperties.Level]: 1,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 18,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Warrior,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.SpearMaster]: {
    [ECreaturesProperties.Key]: EEntities.SpearMaster,
    [ECreaturesProperties.Fraction]: EFraction.Gnome,
    [ECreaturesProperties.Level]: 2,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 14,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: SpearMaster,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.OwnerOfTheBear]: {
    [ECreaturesProperties.Key]: EEntities.OwnerOfTheBear,
    [ECreaturesProperties.Fraction]: EFraction.Gnome,
    [ECreaturesProperties.Level]: 3,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 7,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: OwnerOfTheBear,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.Berserk]: {
    [ECreaturesProperties.Key]: EEntities.Berserk,
    [ECreaturesProperties.Fraction]: EFraction.Gnome,
    [ECreaturesProperties.Level]: 4,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 6,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Berserk,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.PriestOfArcath]: {
    [ECreaturesProperties.Key]: EEntities.PriestOfArcath,
    [ECreaturesProperties.Fraction]: EFraction.Gnome,
    [ECreaturesProperties.Level]: 5,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 3,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: PriestOfArcath,
    [ECreaturesProperties.Wizard]: true,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.Jarl]: {
    [ECreaturesProperties.Key]: EEntities.Jarl,
    [ECreaturesProperties.Fraction]: EFraction.Gnome,
    [ECreaturesProperties.Level]: 6,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 2,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Jarl,
    [ECreaturesProperties.Flying]: true,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.LavaDragon]: {
    [ECreaturesProperties.Key]: EEntities.LavaDragon,
    [ECreaturesProperties.Fraction]: EFraction.Gnome,
    [ECreaturesProperties.Level]: 7,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 1,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: LavaDragon,
    [ECreaturesProperties.isHero]: false,
  },
  // Орда
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
  // Орден Порядка
  [EEntities.Militia]: {
    [ECreaturesProperties.Key]: EEntities.Militia,
    [ECreaturesProperties.Fraction]: EFraction.Human,
    [ECreaturesProperties.Level]: 1,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 22,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Militia,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.CrossBowman]: {
    [ECreaturesProperties.Key]: EEntities.CrossBowman,
    [ECreaturesProperties.Fraction]: EFraction.Human,
    [ECreaturesProperties.Level]: 2,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 12,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: CrossBowman,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.Attic]: {
    [ECreaturesProperties.Key]: EEntities.Attic,
    [ECreaturesProperties.Fraction]: EFraction.Human,
    [ECreaturesProperties.Level]: 3,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 10,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Attic,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.RoyalGriffon]: {
    [ECreaturesProperties.Key]: EEntities.RoyalGriffon,
    [ECreaturesProperties.Fraction]: EFraction.Human,
    [ECreaturesProperties.Level]: 4,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 5,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: RoyalGriffon,
    [ECreaturesProperties.Flying]: true,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.Inquisitor]: {
    [ECreaturesProperties.Key]: EEntities.Inquisitor,
    [ECreaturesProperties.Fraction]: EFraction.Human,
    [ECreaturesProperties.Level]: 5,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 3,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Inquisitor,
    [ECreaturesProperties.Wizard]: true,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.Paladin]: {
    [ECreaturesProperties.Key]: EEntities.Paladin,
    [ECreaturesProperties.Fraction]: EFraction.Human,
    [ECreaturesProperties.Level]: 6,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 2,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Paladin,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.Archangel]: {
    [ECreaturesProperties.Key]: EEntities.Archangel,
    [ECreaturesProperties.Fraction]: EFraction.Human,
    [ECreaturesProperties.Level]: 7,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 1,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Archangel,
    [ECreaturesProperties.Flying]: true,
    [ECreaturesProperties.isHero]: false,
  },
  // Лига Теней
  [EEntities.Assassin]: {
    [ECreaturesProperties.Key]: EEntities.Assassin,
    [ECreaturesProperties.Fraction]: EFraction.League,
    [ECreaturesProperties.Level]: 1,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 7,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Assassin,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.Fury]: {
    [ECreaturesProperties.Key]: EEntities.Fury,
    [ECreaturesProperties.Fraction]: EFraction.League,
    [ECreaturesProperties.Level]: 2,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 5,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Fury,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.MinotaurGuardian]: {
    [ECreaturesProperties.Key]: EEntities.MinotaurGuardian,
    [ECreaturesProperties.Fraction]: EFraction.League,
    [ECreaturesProperties.Level]: 3,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 6,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: MinotaurGuardian,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.DarkHorseman]: {
    [ECreaturesProperties.Key]: EEntities.DarkHorseman,
    [ECreaturesProperties.Fraction]: EFraction.League,
    [ECreaturesProperties.Level]: 4,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 4,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: DarkHorseman,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.CaveHydra]: {
    [ECreaturesProperties.Key]: EEntities.CaveHydra,
    [ECreaturesProperties.Fraction]: EFraction.League,
    [ECreaturesProperties.Level]: 5,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 3,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: CaveHydra,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.MistressOfTheShadow]: {
    [ECreaturesProperties.Key]: EEntities.MistressOfTheShadow,
    [ECreaturesProperties.Fraction]: EFraction.League,
    [ECreaturesProperties.Level]: 6,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 2,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: MistressOfTheShadow,
    [ECreaturesProperties.Wizard]: true,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.BlackDragon]: {
    [ECreaturesProperties.Key]: EEntities.BlackDragon,
    [ECreaturesProperties.Fraction]: EFraction.League,
    [ECreaturesProperties.Level]: 7,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 1,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: BlackDragon,
    [ECreaturesProperties.Flying]: true,
    [ECreaturesProperties.isHero]: false,
  },
  // Некрополис
  [EEntities.BoneArcher]: {
    [ECreaturesProperties.Key]: EEntities.BoneArcher,
    [ECreaturesProperties.Fraction]: EFraction.Necropolis,
    [ECreaturesProperties.Level]: 1,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 20,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: BoneArcher,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.PlagueZombie]: {
    [ECreaturesProperties.Key]: EEntities.PlagueZombie,
    [ECreaturesProperties.Fraction]: EFraction.Necropolis,
    [ECreaturesProperties.Level]: 2,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 15,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: PlagueZombie,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.Ghost]: {
    [ECreaturesProperties.Key]: EEntities.Ghost,
    [ECreaturesProperties.Fraction]: EFraction.Necropolis,
    [ECreaturesProperties.Level]: 3,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 9,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Ghost,
    [ECreaturesProperties.Flying]: true,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.HigherVampire]: {
    [ECreaturesProperties.Key]: EEntities.HigherVampire,
    [ECreaturesProperties.Fraction]: EFraction.Necropolis,
    [ECreaturesProperties.Level]: 4,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 5,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: HigherVampire,
    [ECreaturesProperties.Flying]: true,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.ArchiLich]: {
    [ECreaturesProperties.Key]: EEntities.ArchiLich,
    [ECreaturesProperties.Fraction]: EFraction.Necropolis,
    [ECreaturesProperties.Level]: 5,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 3,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: ArchiLich,
    [ECreaturesProperties.Wizard]: true,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.DeathMessenger]: {
    [ECreaturesProperties.Key]: EEntities.DeathMessenger,
    [ECreaturesProperties.Fraction]: EFraction.Necropolis,
    [ECreaturesProperties.Level]: 6,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 2,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: DeathMessenger,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.GhostDragon]: {
    [ECreaturesProperties.Key]: EEntities.GhostDragon,
    [ECreaturesProperties.Fraction]: EFraction.Necropolis,
    [ECreaturesProperties.Level]: 7,
    [ECreaturesProperties.Rank]: 1,
    [ECreaturesProperties.WeeklyGrow]: 1,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: GhostDragon,
    [ECreaturesProperties.Flying]: true,
    [ECreaturesProperties.isHero]: false,
  },
  // Нейстральные существа
  [EEntities.Wolf]: {
    [ECreaturesProperties.Key]: EEntities.Wolf,
    [ECreaturesProperties.Fraction]: EFraction.Neutral,
    [ECreaturesProperties.Level]: 4,
    [ECreaturesProperties.Rank]: 0,
    [ECreaturesProperties.WeeklyGrow]: 8,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Wolf,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.FireElemental]: {
    [ECreaturesProperties.Key]: EEntities.FireElemental,
    [ECreaturesProperties.Fraction]: EFraction.Neutral,
    [ECreaturesProperties.Level]: 4,
    [ECreaturesProperties.Rank]: 0,
    [ECreaturesProperties.WeeklyGrow]: 4,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: FireElemental,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.WaterElemental]: {
    [ECreaturesProperties.Key]: EEntities.WaterElemental,
    [ECreaturesProperties.Fraction]: EFraction.Neutral,
    [ECreaturesProperties.Level]: 4,
    [ECreaturesProperties.Rank]: 0,
    [ECreaturesProperties.WeeklyGrow]: 4,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: WaterElemental,
    [ECreaturesProperties.Wizard]: true,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.AirElemental]: {
    [ECreaturesProperties.Key]: EEntities.AirElemental,
    [ECreaturesProperties.Fraction]: EFraction.Neutral,
    [ECreaturesProperties.Level]: 4,
    [ECreaturesProperties.Rank]: 0,
    [ECreaturesProperties.WeeklyGrow]: 4,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: AirElemental,
    [ECreaturesProperties.Flying]: true,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.EarthElemental]: {
    [ECreaturesProperties.Key]: EEntities.EarthElemental,
    [ECreaturesProperties.Fraction]: EFraction.Neutral,
    [ECreaturesProperties.Level]: 4,
    [ECreaturesProperties.Rank]: 0,
    [ECreaturesProperties.WeeklyGrow]: 4,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: EarthElemental,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.Mummy]: {
    [ECreaturesProperties.Key]: EEntities.Mummy,
    [ECreaturesProperties.Fraction]: EFraction.Neutral,
    [ECreaturesProperties.Level]: 5,
    [ECreaturesProperties.Rank]: 0,
    [ECreaturesProperties.WeeklyGrow]: 3,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: Mummy,
    [ECreaturesProperties.Wizard]: true,
    [ECreaturesProperties.isHero]: false,
  },
  [EEntities.DeathKnight]: {
    [ECreaturesProperties.Key]: EEntities.DeathKnight,
    [ECreaturesProperties.Fraction]: EFraction.Neutral,
    [ECreaturesProperties.Level]: 6,
    [ECreaturesProperties.Rank]: 0,
    [ECreaturesProperties.WeeklyGrow]: 2,
    [ECreaturesProperties.Tier]: 2,
    [ECreaturesProperties.Icon]: DeathKnight,
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
