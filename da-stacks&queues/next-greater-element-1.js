/**
 * Problem Analysis:
goal: identify the next greater element for each element in nums1 from nums2
input: nums1 = [4,1,2] nums2 = [1,3,4,2]
output: [-1,3,-1]
 * Algorithm Formulation:
Stack Usage: A stack is suitable for tracking previously visited elements in nums2 while searching for the next greater element.
Start with an empty stack and a hashmap to store the next greater element for each number in nums2.
 * Code:
 */

function nextGreaterElement(nums1, nums2) {
  // Initialize your variables here:
  const hashMap = new Map(); // to store the next greatest element for each element
  const stack = []; // to keep track of which elements we need to find the next greatest element for

  // iterate through nums2, using a stack to identify the next greater element for each number stored in a hashmap
  for (let num of nums2) {
    while (stack.length && stack[stack.length-1] < num){
      map.set(stack.pop(), num)
    }
    if (hashMap.hasOwnProperty(nums1[j])) {
      // if nums[j] is less than stack last element, add it
      if (nums2[j] < stack[stack.length - 1]) {
        stack.push(nums2[j]);
      } else {
        // if nums[j] is more than stack last element, pop if off and add to results array
        results[hashMap[nums1[j]]] = nums2[j];
      }
    }
  }

  // iterate through nums1 and use a hashmanp to find the next greater element

  // Return the result for nums1:
  return results;
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));

function nextGreaterElement2(nums1, nums2) {
  let map = new Map(); // To store the next greater element for each number
  let stack = []; // To keep track of the elements for which we need to find the next greater element

  // Traverse through nums2 and fill the map
  for (let num of nums2) {
    // while the stack has length and the last element in the stack is less than the current num
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      // the last element in the stack, current num
      map.set(stack.pop(), num);
    }
    // push the current num on the stack
    stack.push(num);
    console.log(map);
  }

  // The elements left in the stack don't have a next greater element in nums2
  while (stack.length > 0) {
    map.set(stack.pop(), -1);
  }

  // Construct the result array by mapping the elements of nums1 to their next greater element in nums2
  let result = nums1.map((num) => map.get(num));

  return result;
}

console.log(nextGreaterElement2([4, 1, 2], [1, 3, 4, 2]));
