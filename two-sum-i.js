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