function twoSumi(array, target) {
  // HashMap that has index and remaining value
  const map = new Map();

  for (let i = 0; i < array.length; i++) {
    let remaining = target - array[i];
    console.log(map);
    if (map.has(remaining)) {
      return [map.get(remaining), i]; // if remaining has been stored before, return that index and our current index
    }
    map.set(array[i], i); // current value and index
  }
  throw new Error('No solution found!');
}

console.log(twoSumi([1, 3, 4, 5, 2], 3));

function twoSum2(array, target) {
  // use a hashMap to keep track of the past values and their indices
  const map = new Map();

  // iterate through the array
  for (let i = 0; i < array.length; i++) {
    // check to see if the remaining value needed is there, if so, return both indices
    let remaining = target - array[i];
    if (map.has(remaining)) {
      return [map.get(remaining), i];
    } else {
      // if not, add current element with index to the hashMap
      map.set(array[i], i);
    }
  }
  return 'solution not found!';
}

console.log(twoSum2([1, 3, 4, 5, 2], 3));
