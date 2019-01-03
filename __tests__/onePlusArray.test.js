const { onePlusArray } = require('../Solutions/onePlusArray')

describe('onePlusArray', () => {
  it('return null if passed an array with an invalid input of a neg number', () => {
    expect(onePlusArray([-1])).toEqual(null)
  });
  it('return null if passed an array with an invalid input of a number of number digits', () => {
    expect(onePlusArray([-1])).toEqual(null)
  });
  it('returns an array with one number increment by one when passed an array of one single digit', () => {
    expect(onePlusArray([1])).toEqual([2])
  });
  it('return an array of with one added to the sum when passed an array of multiple single digits', () => {
    expect(onePlusArray([2, 3, 9])).toEqual([2, 4, 0])
    expect(onePlusArray([4, 3, 2, 5])).toEqual([4, 3, 2, 6])
  });
});