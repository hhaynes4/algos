/**
 * Problem Analysis
goal: Remove the least number of parentheses to make the string valid.
Ensure each open parenthesis has a corresponding close parenthesis and vice versa.
Input: "lee(t(c)o)de)" (Output: "lee(t(c)o)de" or "lee(t(co)de)")
Input: "a)b(c)d" (Output: "ab(c)d")
 * Algorthim Formulation
utilize a stack to keep track of the position of the open parentheses 
use a set to mark the indices of the parentheses to be removed
*/

// Code
function minRemoveToMakeValid(s) {
  // traverse the string and use a stack to manage open parentheses
  const stack = [];
  const invalidSet = new Set();
  let resultStr = '';


  for (let i = 0; i < s.length; i++) {
    // for each character
    // if its an open parenthesis, push its index onto the stack
    if (s[i] === '(') {
      stack.push(i);
    }
    // if its a closed parenthesis, pop from the stack. if the stack is empty, make this index as invalid
     else if (s[i] === ')') {
      if (stack.length > 0) {
        stack.pop();
      } else {
        invalidSet.add(i);
      }
    }
  }
  // after traversal, any indices remaining in the stack are also invalid
  while (stack.length > 0) {
    invalidSet.add(stack.pop())
  }
  // build the resulting string by skipping characters at invalid indices
  for (let i = 0; i < s.length; i++) {
    if (!invalidSet.has(i)) {
        resultStr += s[i];
    }
  }
  return resultStr;
}

// Execution (test cases)
console.log(minRemoveToMakeValid("lee(t(c)o)de)"))
console.log(minRemoveToMakeValid("a)b(c)d" )) //-> "ab(c)d"

/* Review
time complexity: 3*O(n) ==> ~ O(n)
space complexity: O(n)
*/