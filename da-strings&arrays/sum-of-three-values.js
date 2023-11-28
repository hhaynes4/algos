// see if three values can sum up the target
// return true or false

const threePointers = (arr, target) => {
  // set two pointers low and high
  const sorted = arr.sort((a, b) => a - b);
  console.log(sorted)
  let low;
  let high = sorted.length - 1;
  // loop through the array and have i be the third pointer
  for (let i = 0; i < sorted.length; i++) {
    low = i + 1;
    // if three pointers sum up to target return true
    let sum = sorted[i] + sorted[low] + sorted[high];
    console.log(sorted[i])
    console.log(sorted[low])
    console.log(sorted[high])
    console.log(sum)
    if (sum === target) {
      return true;
    } else if (sum < target) {
      low++;
    } else {
      high--;
    }
  }
  // else return false
  return false;
};

const array = [1,4,3,6,2,8]

console.log(threePointers(array, 12))
