import {getGoblinProbabilities, getGoblinsN, getHeroN, getTargetN} from "./results-utils";

describe('getGoblinsN', () => {
  it('Ноль гоблинов дают 1 очко сравнения', () => {
    expect(getGoblinsN(0)).toBe(1)
  });
  it('25 гоблинов дает 2 очка сравнения', () => {
    expect(getGoblinsN(25)).toBe(2)
  });
  it('50 гоблинов дает 3 очка сравнения', () => {
    expect(getGoblinsN(50)).toBe(3)
  });
})

describe('getTargetN', () => {
  it('1 гоблин шаман дает 3 очка сравнения', () => {
    // 1 + 2 + (1 - 1)/25
    expect(getTargetN(1, 2, 1, 25)).toBe(3);
  });
  it('1 боевой кентавр дает 4 очка сравнения', () => {
    // 2 + 2 + (1 - 1)/14
    expect(getTargetN(2, 2, 1, 14)).toBe(4);
  });
  it('1 Кровоглазый циклоп дает 9 очков сравнения', () => {
    // 7 + 2 + (1 - 1)/1
    expect(getTargetN(7, 2, 1, 1)).toBe(9);
  })
  it('51 гоблинов шаманов дает 5 очка сравнения', () => {
    // 1 + 2 + (51 - 1)/25
    expect(getTargetN(1, 2, 51, 25)).toBe(5);
  });
  it('6 Кровоглазых циклопов дает 14 очков сравнения', () => {
    // 7 + 2 + (6 - 1)/1
    expect(getTargetN(7, 2, 6, 1)).toBe(14);
  })
})

describe('getGoblinProbabilities', () => {
  it('Если очки равны - вероятности одинаковы', () => {
    expect(getGoblinProbabilities(1, 1)).toEqual({
      positive: 25,
      semiPositive: 25,
      semiNegative: 25,
      negative: 25,
    })
  })
  it('Гоблины опережают на 1 очка', () => {
    expect(getGoblinProbabilities(2, 1)).toEqual({
      positive: 30,
      semiPositive: 25,
      semiNegative: 25,
      negative: 20,
    })
  })
  it('Гоблины опережают на 2 очка', () => {
    expect(getGoblinProbabilities(3, 1)).toEqual({
      positive: 35,
      semiPositive: 25,
      semiNegative: 25,
      negative: 15,
    })
  })
  it('Гоблины опережают на 4 очка - минимальный шанс негативного', () => {
    expect(getGoblinProbabilities(5, 1)).toEqual({
      positive: 45,
      semiPositive: 25,
      semiNegative: 25,
      negative: 5,
    })
  })
  it('Гоблины опережают на 8 очков - минимальный шанс полунегативного', () => {
    expect(getGoblinProbabilities(9, 1)).toEqual({
      positive: 65,
      semiPositive: 25,
      semiNegative: 5,
      negative: 5,
    })
  })
  it('Гоблины опережают на 12 очков - максимальный положительный шанс', () => {
    expect(getGoblinProbabilities(13, 1)).toEqual({
      positive: 85,
      semiPositive: 5,
      semiNegative: 5,
      negative: 5,
    })
  })
  it('Гоблины опережают на 40 очков - максимальный положительный шанс', () => {
    expect(getGoblinProbabilities(41, 2)).toEqual({
      positive: 85,
      semiPositive: 5,
      semiNegative: 5,
      negative: 5,
    })
  })
  it('Гоблины уступают на 1 очко', () => {
    expect(getGoblinProbabilities(1, 2)).toEqual({
      positive: 20,
      semiPositive: 25,
      semiNegative: 25,
      negative: 30,
    })
  })
  it('Гоблины уступают на 2 очка', () => {
    expect(getGoblinProbabilities(1, 3)).toEqual({
      positive: 15,
      semiPositive: 25,
      semiNegative: 25,
      negative: 35,
    })
  })
  it('Гоблины уступают на 4 очка - минимальный шанс положительного', () => {
    expect(getGoblinProbabilities(1, 5)).toEqual({
      positive: 5,
      semiPositive: 25,
      semiNegative: 25,
      negative: 45,
    })
  })
  it('Гоблины уступают на 8 очков - минимальный шанс полуположительного', () => {
    expect(getGoblinProbabilities(1, 9)).toEqual({
      positive: 5,
      semiPositive: 5,
      semiNegative: 25,
      negative: 65,
    })
  })
  it('Гоблины уступают на 12 очков - максимальный шанс негативного', () => {
    expect(getGoblinProbabilities(1, 13)).toEqual({
      positive: 5,
      semiPositive: 5,
      semiNegative: 5,
      negative: 85,
    })
  })
})

describe('getHeroN', () => {
  it('Герой 18 лвла кастует ускорение', () => {
    expect(getHeroN(18, 1)).toBe(19);
  });
})