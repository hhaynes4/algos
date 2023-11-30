// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

/**
 * Problem Analysis:
goal: return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Algorithm Formulation:
// sort the array
// use three pointers
// if the values add up to zero, add them to a set, else move the pointers
 * Code:
 */

function threeSum(array) {
  // sort the array
  const combos = [];
  const sortedArr = array.sort((a, b) => a - b); //O(nlogn)
  // declare pointers

  for (let left = 0; left < sortedArr.length - 2; left++) {
    //O(n)^2
    if (left > 0 && sortedArr[left] === sortedArr[left - 1]) {
      continue; // skip duplicates
    }
    let mid = left + 1;
    let right = sortedArr.length - 1;

    while (mid < right) {
      let currentTotal = sortedArr[left] + sortedArr[mid] + sortedArr[right];
      if (currentTotal < 0) {
        mid++;
      } else if (currentTotal > 0) {
        right--;
      } else {
        // add combo!
        combos.push([sortedArr[left], sortedArr[mid], sortedArr[right]]);
        mid++;
        right--;
      }
    }
  }

  return combos;
}

// Execution (test cases)
console.log(threeSum([-1, 0, 1, 2, -1, -4])); //[[-1,-1,2],[-1,0,1]]

/**
 * Review:
 */

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
function twoSumi(array, target) {
  // HashMap that has index and remaining value
  const map = new Map();

  for (let i = 0; i < array.length; i++) {
    let remaining = target - array[i];
    console.log(map);
    if (map.has(remaining)) {
      return [map.get(remaining), i]; // if remaining has been stored before, return that index and our current index
    }
    map.set(array[i], i); // current value and index
  }
  throw new Error('No solution found!');
}

console.log(twoSumi([1, 3, 4, 5, 2], 3));
