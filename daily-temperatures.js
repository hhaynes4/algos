var dailyTemperatures = function (temperatures) {
  const stack = [];
  const results = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    // check to see if this is more than the last dayswaiting
    while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
      // if more, replace the results array with the difference in indices
      let poppedSubArr = stack.pop();
      results[poppedSubArr[1]] = i - poppedSubArr[1];
    }
    // if not, add to days waiting with index
    stack.push([temperatures[i], i]);
  }

  return results;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
