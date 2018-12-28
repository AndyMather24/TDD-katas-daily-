const { sortTheOdds } = require('../Solutions/sortTheOdd');

describe('sortTheOdds', () => {
  it('return empty arr when passed empty arr', () => {
    expect(sortTheOdds([])).toEqual([])
  });
});
