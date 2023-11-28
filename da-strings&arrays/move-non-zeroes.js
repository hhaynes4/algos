/*
Problem Analysis
problem: 
Algorithm Formulation
fast pointer to traverse the array and fidn non-zero numbers
slow pointer to place these non-zero nums in their right position
Code
Execution
Review
*/

function moveZeroes(nums) {
    // Initialize your pointers here:
    let slow = 0
    let fast = 0
    
    //move non-zeroes to the front:
    while (fast < nums.length) {
      if (nums[fast] !== 0) {
        nums[slow] = nums[fast]
        slow++
      }
      fast++
    }
  
    // fill in the rest of the array with zeroes
    for (let i = slow; i < nums.length; i++) {
      nums[i] = 0;
    }
    
    // Return the modified array:
    return nums;
  }
  
  console.log(moveZeroes([0, 2, 0, 3, 4, 0, 5]))