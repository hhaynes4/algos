// left shift a row like in 2048 game!
// represent the spaces with zeros

function shiftRowLeft(row) {
  // take all the zeros and add them to the end
  const withoutZeros = row.filter((el) => el !== 0);

  // iterate through the loop, if the current
  for (let i = 0; i < withoutZeros.length; i++) {
    if (withoutZeros[i] === withoutZeros[i + 1]) {
      withoutZeros[i] *= 2; // add them together
      withoutZeros[i + 1] = 0;
    }
  }

  const resultsWithoutZeros = withoutZeros.filter((el) => el !== 0);
  const zeros = Array(row.length - resultsWithoutZeros.length).fill(0);

  return resultsWithoutZeros.concat(zeros);
}

console.log(shiftRowLeft([0, 0, 4, 0, 4, 8, 8])); // [8, 16, 0, 0, 0, 0, 0]
console.log(shiftRowLeft([0, 0, 0, 0, 0, 0, 0])); // [0, 0, 0, 0, 0, 0, 0]
console.log(shiftRowLeft([2, 2, 2, 2, 2, 2, 2])); // [4, 4, 4, 2, 0, 0, 0]
