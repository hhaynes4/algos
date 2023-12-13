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

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// find all combos and if the total is zero
var threeSum = function (nums) {
  const combos = [];
  const sortedArr = nums.sort((a, b) => a - b); //O(nlogn)
  // declare pointers

  for (let left = 0; left < sortedArr.length - 2; left++) {
    //O(n)^2
    if (sortedArr[left] != sortedArr[left - 1]) {
      // skip duplicates
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
          while (sortedArr[mid] === sortedArr[mid + 1]) {
            mid++;
          }
          mid++;
          while (sortedArr[right] === sortedArr[right - 1]) {
            right--;
          }
          right--;
        }
      }
    }
  }

  return combos;
};

// Execution (test cases)
console.log(threeSum([-2, 0, 0, 2, 2])); //[[-1,-1,2],[-1,0,1]]

/**
 * Review:
 * time complexity of O(n)^3 and linear space complexity
 */