function isValid(s) {
  const stack = [];
  const obj = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < s.length; i++) {
    if (obj.hasOwnProperty(s[i])) {
        stack.push(obj[s[i]])
    } else if (s[i] !== stack.pop()) {
        return false;
    }
  }

  return stack.length === 0;
}

console.log(isValid("()"))
console.log(isValid("([)]"))
console.log(isValid("()(][)"))