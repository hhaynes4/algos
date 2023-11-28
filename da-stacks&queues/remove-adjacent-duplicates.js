/**
 * Problem Analysis
goal: Given a string s, repeatedly remove all adjacent duplicates in the string and return it.
Input: "abbaca"
Output: "ca"
Input: "ahahhabb"
Output: "ah"
How can you iteratively remove adjacent duplicates from the string?

 * Algorithm Formulation
// iterate through the string
if the current element is equal to the last stack element, pop it off
else, add it
 */

// Code
function removeDuplicates(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join('');
}

//Execution
console.log(removeDuplicates('abbaca'));
console.log(removeDuplicates('azxxzy'));
console.log(removeDuplicates('abba'));

/*Review:
The stack method is suitable for this problem because it efficiently keeps track of previous characters, making it easy to identify and remove duplicates.
*/
