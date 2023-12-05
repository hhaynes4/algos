/**
 * @param {*} s
 * 
 * Problem Analysis:
goal: Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

input: "(()" // 2
input: ")()())" // 4
 */

function longestValidParentheses(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')' && stack[stack.length-1] === '(') {
        stack.pop();
    } else {
        // the element is "(" AND ")" without a match
        stack.push(s[i]);
    }
  }

  return (s.length - stack.length);
}

// Execute: Test cases 
console.log(longestValidParentheses("(()")) // 2
console.log(longestValidParentheses("(())")) // 4
console.log(longestValidParentheses(")()())")) //4
console.log(longestValidParentheses(")")) //0
/**
 * Review: 
 * time complexity: O(n)
 * space complexity: O(n)
 */