// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

/**
 * Problem Analysis:
goal: find the two lines that together with the x-axis form a container such that the container can hold the most water
input: [1,8,6,2,5,4,8,3,7]
output: 49
 * Algorithm Formulation:
two pointers approach (a far left and far right)

 * Code:
 */

function maximumVolume(array) {
  // declare two pointers (left and right)
  let left = 0;
  let right = array.length - 1;

  // declare a variable to hold the maximum volume
  let maxVolume = -Infinity;

  //iterate through while left is less than right
  while (left < right) {
    let currentVolume = (right - left) * Math.min(array[left], array[right]);
    maxVolume = Math.max(maxVolume, currentVolume);
    // move the pointer of the smaller height!
    if (array[left] < array[right]) {
      left++;
    } else {
      right--;
    }
  }

  // return the maximum volume
  return maxVolume;
}

// Execution
console.log(maximumVolume([1, 8, 6, 2, 5, 4, 8, 3, 7])); //49

/*
Review: 
time complexity is O(n) and space complexity is constant
*/
