/*
PSEUDO CODE SKELETON:
function FIND_SOLUTIONS(params){
    if (valid solution) {
        store the solution or print etc
        Return
    } else {
        for (all choices) {
            if (valid choice): {
                APPLY (choice)
                FIND_SOLUTIONS (param)
                BACKTRACK (remove choice)
            }
        }
    }
    return
}
*/
// helper swaping function
function swap(str, i, j) {
  let temp = str[i];
  str[i] = str[j];
  str[j] = temp;
  return str;
}

// backtracking, switching two letters at a time
function permute(str, l, r) {
  // at the end of the iteration where the pointers are equal
  if (l === r) {
    console.log(str.join(''));
    return;
  } else {
    // loop between pointers, swapping i with each spot
    for (let i = l; i <= r; i++) {
      // apply swap
      str = swap(str, l, i);
      // recursive call moving the l pointer
      permute(str, l + 1, r);
      // backtrack (back to last version of the string)
      str = swap(str, l, i);
    }
  }
  return;
}

permute(['A', 'B', 'C'], 0, 2);
