const { deleteNth } = require('../deleteNth');

describe('deleteNth', () => {
  it('returns an array with numbers n times when passed arr of one number n times', () => {
    expect(deleteNth([1], 1)).toEqual([1])
  });
  it('returns an array with numbers n times when passed arr of a number occuring more than n times', () => {
    expect(deleteNth([1, 1], 1)).toEqual([1])
    expect(deleteNth([2, 2, 2, 2], 3)).toEqual([2, 2, 2])
  });
  it('returns an array of numbers that do not occur more than n in the same order when passed an array and n.', () => {
    expect(deleteNth([3, 5, 3, 5, 3, 5], 2)).toEqual([3, 5, 3, 5])
  });
});
