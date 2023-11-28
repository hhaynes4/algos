// Given an array of integers temperatures representing daily temperatures, return an array that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, keep 0 instead.
/**
 *
 * @param {*} temperatures
 * Problem Analysis
 * goal: for each day in the input, tells you how many days you would have to wait until a warmer temperature.
 * input: [73, 74, 75, 71, 69, 72, 76, 73], output: [1, 1, 4, 2, 1, 1, 0, 0]
 * Algorithm Formualtion:
 * approach
 * keep track of days to wait in a stack
 * initialize a counter
 * use two pointers and push days to wait onto the stack
 * pop off the input queue as you iterate
 * Code:
 */

function dailyTemperatures(temperatures) {
  const daysToWait = [];

  for (let i = 0; i < temperatures.length; i++) {
    let counter = i + 1;
    while (counter < temperatures.length) {
      if (temperatures[i] < temperatures[counter]) {
        daysToWait.push(counter - i);
        break;
      } else {
        counter++;
      }
    }

    if (counter === temperatures.length) {
      daysToWait.push(0);
    }
  }
  return daysToWait;
}
// Execution:
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

/*
Review:
time complexity: O(n)**2 :(
space complexity: O(n)

I could not think of how to use stacks and queues more efficiently for this problem
*/

/**
 * Problem Analysis:
goal: Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
input =  [["1","0","1","0","0"],
          ["1","0","1","1","1"],
          ["1","1","1","1","1"],
          ["1","0","0","1","0"]]
output = 6
 * Algorithm Formulation:
 * Code:
 */

// Execution:
// Review:

