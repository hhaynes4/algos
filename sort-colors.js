// Given an array consisting of only 0s, 1s, and 2s, sort the elements in linear time and constant space.

function dutchNatFlag(arr) {
  // three pointers
  let zeros = 0;
  let ones = 0;
  let twos = arr.length - 1;

  while (ones <= twos) {
    // ones is 0, swap and move zero and one
    if (arr[ones] === 0) {
      [arr[zeros], arr[ones]] = [arr[ones], arr[zeros]];
      zeros++;
      ones++;
    } else if (arr[ones] === 1) {
      ones++;
    } else if (arr[ones] === 2) {
      [arr[twos], arr[ones]] = [arr[ones], arr[twos]];
      twos--;
    }
  }
  return arr;
}

const example = [0, 2, 0, 1, 2, 0, 2, 0];
/**
 *               |
 *                   |
 *
 */
console.log(dutchNatFlag(example));
