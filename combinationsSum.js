/*
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.



Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
Example 2:
Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]
Constraints:

1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30
*/

// take or leave it
// looking at each element in the array, 1) apply the element to the target, 2) do not apply the element to the target

function combinationsSum(candidates, target) {
  const sorted = candidates.sort((a, b) => a - b);
  console.log(sorted);
  const combos = [];
  console.log(combos);

  function oneCombo(index = 0, remaining = target, combo = []) {
    // basecase
    if (remaining === 0) {
      return combos.push([...combo]);
    }
    if (remaining < 0 || index === sorted.length) return;
    console.log(combo);
    // gets me closer to zero, take it or leave
    // apply / take it
    for (let i = index; i < sorted.length; i++) {
      if (sorted[i] <= remaining) {
        // take it
        oneCombo((index += 1), remaining - sorted[index], [...combo, sorted[index]]);
        // leave it
        oneCombo((index += 1), remaining, combo);
      } else {
      }
      // did not take it, onto next index
    }
  }
  oneCombo();
  return combos;
}

console.log(combinationsSum([10, 1, 2, 7, 6, 1, 5], 8));
// [
//     [1,1,6],
//     [1,2,5],
//     [1,7],
//     [2,6]
//     ]

var combinationSum2 = function (c, target) {
  c.sort((a, b) => a - b);
  let res = [];

  let iterate = (index, sum, temp) => {
    if (sum > target) return;
    if (sum == target) {
      res.push(temp);
      return;
    }
    // 1 1 2 5 6 7 10
    for (let i = index; i < c.length; i++) {
      if (i != index && c[i] == c[i - 1]) continue;
      iterate(i + 1, sum + c[i], [...temp, c[i]]);
    }
  };
  iterate(0, 0, []);
  return res;
};

var combinationSum = function (
  candidates,
  target,
  combination = [],
  sum = 0,
  result = [],
  start = 0
) {
  // Base condition
  if (sum === target) {
    result.push(combination);
  }
  // Optimizing... If sum is greater than target, then other iteration of recursion are prevented
  if (sum > target) {
    return;
  }
  // Assign i to start to avoid duplicates
  for (let i = start; i < candidates.length; ++i) {
    // Sum increased by each i'th value. This is calculated for each branch exploration
    sum += candidates[i];
    combinationSum(
      candidates,
      target,
      [...combination, candidates[i]],
      sum,
      result,
      i
    );
    // Sum decreased by each i'th value. This is calculated for each back tracking
    sum -= candidates[i];
  }

  return result;
};
