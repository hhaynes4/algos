/*
Create a function that takes in an array and a target value.
If the target value is found, return the corresponding index.
If no target value is found, return -1.

A = [1, 2, 3, 4], T = 3, return 2
     0  1  2  3

A = [1, 2, 3, 4], T = 5, return -1
     0  1  2  3

A = [2, 2, 2, 3], T = 2, return 0
     0  1  2  3

NOTE: Please feel free to ask questions and walk us through your thought process :)
*/

function indexOfTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;
}
// avoid verbs (indexOfTarget, indexOf)
// console.log(indexOfTarget([1, 2, 3, 4], 3)) // 2
// console.log(indexOfTarget([1, 2, 3, 4], 5)) // -1
// console.log(indexOfTarget([2, 2, 2, 3], 2)) // 0

function indexOfTarget2(array, target) {
    // three pointers pointing to indices
    let mid = Math.floor(array.length / 2);
    let left = 0;
    let right = array.length;

  // while the left is less than the right
  while (left < mid && mid < right) {
    // first check the beginning of the sub array 
    if (array[left] === target) return left;
    // if target is less than array[mid], look at the first half of the array
    if (target < array[mid]) {
      right = mid;
      mid = Math.floor((left + right) / 2);
    // if target is more than array[mid], look at the second half of the array
    } else if (target > array[mid]) {
      left = mid
      mid = Math.floor((left + right)/2)
    } else if (target === array[mid]) {
      return mid
    }
  }

  return -1;
}

console.log(indexOfTarget2([1, 2, 3, 4, 5, 6,], 3)) // 2
console.log(indexOfTarget2([1, 2, 3, 4, 6, 7], 5)) // -1
console.log(indexOfTarget2([2, 2, 2, 3], 2)) // 0

/*
From Alex:
* communication was strong
* good job testing outputs without being asked
* ask questions before starting (i.e. can I assume the values will always be numbers?)
practicing binary search tree (use pointers instead of copying and manipulating, dont manipulate inputs directly unless you have to)
 */

// practicing binary search tree (use pointers instead of copying and manipulating, dont manipulate inputs directly unless you have to)
// use Math.floor() or Math.ceil()
// account for duplicates!!
// the solution should be nlog(m) time complexity with constant space complexity
// lead with more confidence ('should' or 'I expect it to' instead of 'hopefully')

// pair the book lessons with leetcode

// target all company sizes
// target more locations
// AB test resume
// reach out to 2 people always
// change taco tuesday to more specific
// most recently posted on linkedin
// leave Anago and remove OSLabs

// get AWS certificate Cloud Practicioner (message on alumni slack)
