// Given a string that contains exactly 1 pair of parentheses, compute recursively a new string made of only the parentheses and their contents, so "xyz(abc)123" yields "(abc)".
// approach: recursion with parameters as storage

function parenBit(string1, add = false, current = 0, result= '') {
    // base case: if string1[current] === ")" add and return the string
      if (string1[current] === ')') {
        result += ")"
        return result;
      }
    // recursive case: else call insideParens, incrementing current, and adding to result if add is true
      if (string1[current] === '(') {
        add = true;
      }
      if (add === true) {
        result += string1[current]
      }
      return parenBit(string1, add, current + 1, result)
  }
  
  //console.log(parenBit("xyz(abc)123")) //"(abc)"
  //console.log(parenBit("x(hello)")) //"(hello)"
  //console.log(parenBit("(xy)1"))//"(xy)"
  
  // We'll say that a "skipped pair" in a string is two instances of a char separated by a char. So "AxA" the A's make a pair. Pair's can overlap, so "AxAxA" contains 3 skipped pairs -- 2 for A and 1 for x. Recursively compute the number of skipped pairs in the given string.
  

//recursively call copies of the string, keeping track of the pairs

function countSkippedPairs(stringOfPairs){
    let pairs = 0;

    function findPairs(string){
        // base case: if string length is less than 3, return
        if (string.length < 3) {
            return;
        }
        // else check for pair
        if (string[0] === string[2]) {
            pairs++
        }
        // recrusively call
        findPairs(string.slice(1))

    }
    findPairs(stringOfPairs);
    return pairs;
}

console.log(countSkippedPairs("axa")) // 1
console.log(countSkippedPairs("axax")) // 2
console.log(countSkippedPairs("aaa")) // 1