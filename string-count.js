// count the occurences of something in a string
const solution = (string, target) => {
    let count = 0;
  
    for (let i = 0; i < string.length; i++) {
      if (string[i].toLowerCase() === target) {
        count++
      }
    }
  
    return count;
  }
  
  console.log(solution('HELLO', 'o'))