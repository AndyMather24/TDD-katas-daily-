const sortTheOdds = (arr) => {
  const odd = arr.filter(num => num % 2).sort((a, b) => a > b);
  return arr.map(num => { return num % 2 ? odd.shift() : num });
}
module.exports = { sortTheOdds }
