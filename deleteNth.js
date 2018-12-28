
const deleteNth = (arr, n) => {
  const tally = arr.reduce((acc, currentValue, i) => {
    (!acc.found[currentValue]) ? acc.found[currentValue] = 1 : acc.found[currentValue]++
    if (acc.found[currentValue] <= n || !acc.outputArr.includes(currentValue)) acc.outputArr.push(currentValue);
    return acc;
  }, { found: {}, outputArr: [] })
  return tally.outputArr
}
module.exports = { deleteNth };
