/*
 * Problem Analysis:
goal: determine if two strings are equal after applying the backspace operation. A backspace ('#') means deleting the previous character.
 * Algorithm Formulation:
approach: a stack
// iterate through both strings and push onto a stack if a letter and pop off the top of the stack if a "#"
compare the arrays.join(' ')
 * Code:
 */
// questions:
// will the string ever be invalid? i.e. number or # first?
function backspaceStrings(string1, string2) {
  function backspace(string) {
    const stack = [];

    for (let i = 0; i < string.length; i++) {
      if (string[i] !== '#') {
        stack.push(string[i]);
      } else if (string.length) {
        stack.pop();
      }
    }
    return stack.join(' ');
  }

  return backspace(string1) === backspace(string2);
}

// Execution:
console.log(backspaceStrings('ab#c', 'ad#c')); // true
console.log(backspaceStrings('ab##', 'c#d#')); // true
console.log(backspaceStrings('a#c', 'b')); // false

/*
 * Review:
time complexity: O(m + n) = O(n)
space complexity: O(m + n) = O(n)
 */
