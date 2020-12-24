
/**
 * Получение очки сравнения гоблинов
 */
export const getGoblinsN = (count: number) => {
  return Math.floor(1 + count/25);
};

/**
 * Получение очков сравнения цели, на которое направлено проклятие
 */
export const getTargetN = (level: number, rank: number, count: number, weeklyGrow: number) => {
  return Math.floor(level + rank + (count - 1)/weeklyGrow);
}

/**
 * Получение очков сравнения героя, на которое направлено проклятие
 */
export const getHeroN = (heroLevel: number, castLevel: number): number => {
  return heroLevel + castLevel;
}

/**
 * Получение вероятностей срабатывания гоблинских проклятий
 */
export const getGoblinProbabilities = (goblinsN: number, targetN: number) => {
  const defaultProbability = {
    positive: 25,
    semiPositive: 25,
    semiNegative: 25,
    negative: 25,
  };

  // TODO: Подумать над вариантом получше
  if (goblinsN > targetN) {
    const differencePoints = goblinsN - targetN;

    if (differencePoints <= 4) {
      defaultProbability.negative = defaultProbability.negative - (5 * differencePoints);
    } else if (differencePoints > 4) {
      defaultProbability.negative = 5;
    }

    if (differencePoints > 4 && differencePoints <= 8) {
      defaultProbability.semiNegative = defaultProbability.semiNegative - (5 * (differencePoints - 4));
    } else if (differencePoints > 8) {
      defaultProbability.semiNegative = 5;
    }

    if (differencePoints > 8 && differencePoints <= 12) {
      defaultProbability.semiPositive = defaultProbability.semiPositive - (5 * (differencePoints - 8));
    } else if (differencePoints > 12) {
      defaultProbability.semiPositive = 5;
    }

    if (differencePoints <= 12) {
      defaultProbability.positive = defaultProbability.positive + (5 * differencePoints);
    } else {
      defaultProbability.positive = 85;
    }

    return defaultProbability;
  }

  if (goblinsN < targetN) {
    const differencePoints = targetN - goblinsN;

    if (differencePoints <= 4) {
      defaultProbability.positive = defaultProbability.positive - (5 * differencePoints);
    } else if (differencePoints > 4) {
      defaultProbability.positive = 5;
    }

    if (differencePoints > 4 && differencePoints <= 8) {
      defaultProbability.semiPositive = defaultProbability.semiPositive - (5 * (differencePoints - 4));
    } else if (differencePoints > 8) {
      defaultProbability.semiPositive = 5;
    }

    if (differencePoints > 8 && differencePoints <= 12) {
      defaultProbability.semiNegative = defaultProbability.semiNegative - (5 * (differencePoints - 8));
    } else if (differencePoints > 12) {
      defaultProbability.semiNegative = 5;
    }

    if (differencePoints <= 12) {
      defaultProbability.negative = defaultProbability.negative + (5 * differencePoints);
    } else {
      defaultProbability.negative = 85;
    }


    return defaultProbability;
  }

  return defaultProbability;
}
