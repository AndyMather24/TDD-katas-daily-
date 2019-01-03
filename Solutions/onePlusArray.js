const onePlusArray = (arr) => {
  let stringOfNumbers = '';
  const invalidInput = arr.filter(n => n < 0 || n > 9);
  if (invalidInput.length) {
    return null
  } else {
    stringOfNumbers = arr.join('');
    stringOfNumbers++;
    return stringOfNumbers.toString().split('').map(n => +n);
  }
}
module.exports = { onePlusArray }
