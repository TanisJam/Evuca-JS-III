function BinarioADecimal(num) {
  // tu codigo aca
  let arr = num
    .split('')
    .reverse()
    .map(n => parseInt(n));

  let converted = arr.reduce((acc, num, exponent) => {
    acc += num * (2 ** exponent);
    return acc;
  });

  return converted;
}

function DecimalABinario(num) {
  // tu codigo aca
  let number = num;
  let array = [];

  do {
    array.push(number % 2);
    number = Math.floor(number / 2);
  } while (number > 1);
  array.push(number % 2);

  let converted = array.reverse().join('');

  return converted;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}