/* 
P
problem: Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
two-pointers:

A
C
E
R
*/

function threeSum(nums) {
  nums.sort((a, b) => a - b); // Remember to sort :)
  const result = [];

  // iterate through the sorted array
  for (let i = 0; i < nums.length; i++) {
    //skip the duplicates
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1; // to the left of i
    let right = nums.length - 1; // the last elements
    // for each iteration, we have a new set of two pointers
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      // if sum is equal to zero, we found it!
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        //skip dulplicates!
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        // if sum is less than zero, increment left
        left++;
      } else {
        // if sum is more than zero, decrement right
        right--;
      }
    }
  }
  // Your code here
  return result;
}

console.log(threeSum([1, 2, -4, 5]));
