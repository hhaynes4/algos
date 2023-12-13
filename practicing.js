//shift left on a row like the game 2048

// input: [0,0,4,0,4,8,0,8] output: [8,16,0,0,0,0,0,0]
// input: [2,2,2,2,2,2,2,2] output: [4,4,4,4,0,0,0,0]

// zeros move to the end
// iterate through the array and combine numbers if they are the same

function game2048(row){
    const noZeros = row.filter(el => el !== 0);

    for (let i = 0; i < noZeros.length - 1; i++) {
        if (noZeros[i] === noZeros[i + 1]) {
            noZeros[i] *= 2
            noZeros[i+1] = 0
        }
    }

    const removedZeros = noZeros.filter(el => el !== 0)
    const zeros = Array(row.length - removedZeros.length).fill(0);
    return removedZeros.concat(zeros)
}

// console.log(game2048([0,0,4,0,4,8,0,8])) //[8,16,0,0,0,0,0,0]
// console.log(game2048([2,2,2,2,2,2,2,2])) //[4,4,4,4,0,0,0,0]

// Given a string that contains exactly 1 pair of parentheses, compute recursively a new string made of only the parentheses and their contents, so "xyz(abc)123" yields "(abc)".

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
  
  
  parenBit("xyz(abc)123") //"(abc)"