const { sortTheOdds } = require('../Solutions/sortTheOdd');

describe('sortTheOdds', () => {
  it('return empty arr when passed empty arr', () => {
    expect(sortTheOdds([])).toEqual([])
  });
  it('return arr sorted ascending when contains only odd numbers', () => {
    expect(sortTheOdds([3, 1])).toEqual([1, 3])
  });
  it('return arr with odd numbers sorted ascending and even number left at the same index', () => {
    expect(sortTheOdds([3, 4, 1])).toEqual([1, 4, 3])
  });
  it('return arr with odd numbers sorted ascending and even numbers left at the same indexs', () => {
    expect(sortTheOdds([3, 8, 4, 10, 1])).toEqual([1, 8, 4, 10, 3])
  });
});
