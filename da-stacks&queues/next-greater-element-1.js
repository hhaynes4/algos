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

function nextGreaterNumber(nums1, nums2){
  // save the mapping of each element
  const hashMap = new Map()
  // monotonic decreasing stack:
  const stack = [];
  const results = [];

  for (let i = 0; i < nums2.length; i++) {
    while (stack.length && nums2[i] > stack[stack.length - 1]) {
      hashMap.set(stack.pop(), nums2[i])
    }
    stack.push(nums2[i])
  }

  for (let i = 0; i < nums1.length; i++) {
    if (hashMap.has(nums1[i])) {
      results.push(hashMap.get(nums1[i]))
    } else {
      results.push(-1)
    }
  }

  return results;
}

console.log(nextGreaterNumber([4,1,2],[1,3,4,2]))
console.log(nextGreaterNumber([2,4],[1,2,3,4])) // [3,-1]
console.log(nextGreaterNumber([4,1,2],[1,3,4,2])) // [3,-1]