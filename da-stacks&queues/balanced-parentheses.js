// Scenario: Check if parentheses in an expression are balanced.

// Using Stacks: For every opening bracket, push it onto the stack. For every closing bracket, pop from the stack and check for the matching pair. If mismatched or the stack isn't empty at the end, the expression isn't balanced.

function isValid(s) {
  const openParen = [];

  const possibilities = {
    "(": ")",
    "{": "}",
    "[": "]"
  }

  for (let i = 0; i < s.length; i++) {
    if (possibilities.hasOwnProperty(s[i])) {
      openParen.push(possibilities[s[i]]);
      console.log(openParen)
    } else if (s[i] === openParen[openParen.length-1]) {
      openParen.pop();
    } else {
        return false
    }
  }
  return openParen.length === 0;
}

console.log(isValid("([)]"))
console.log(isValid('(())'));
console.log(isValid('(())()){}'))
console.log(isValid('()'))
console.log(isValid('([)]'))
console.log(isValid('{[]}'))
console.log(isValid("(]"))
