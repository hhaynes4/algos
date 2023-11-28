// number of occurences in a string but the target can be multiple letters

// sliding window technique
// two pointers set at 0 and then length of target
// if there is a match, increase count, move pointers

function solution(string, target) {
  let count = 0;
  if (target.length > string.length) return count;

  let left = 0;
  let right = target.length;

  while (right <= string.length) {
    if (string.substring(left, right) === target) {
      count++;
    }
    left++;
    right++;
  }

  return count;
}

console.log(solution('halia', 'li'));
