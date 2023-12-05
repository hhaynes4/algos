/**
 * Problem Analysis:
 * goal: find the minimum number of perfect square numbers that sum up to n
 * Input: n = 12 // 3
Explanation: 12 = 4 + 4 + 4.
approach: 
use BFS to traverse through potential sums, using queues for level-by-level traversal 
queue to store each sum and the number of steps to reach it
 * Algorithm Formulation:
tools: queue (store each sum and its step count), set (visited sums to prevent redundant processing)
// enqueue the initial state (0,0), representing the sum and step count
// dequeue and explore the next level of sums by adding perfect squares
// continue until the sum equals n
 * Code:
 */

function numSquares(n) {
  // like BFS, keep track of what to calculate with a queue
  const queue = [[0, 0]];
  // a set to ensure no repeated elements added to the queue
  const set = new Set();

  while (queue.length) {
    // keep track of count and sum
    let [sum, count] = queue.shift();

    // only need to check i when the square root is less than n
    for (let i = 0; i * i < n; i++) {
      newSum = sum + i * i;

      if (newSum === n) return count + 1;

      if (!set.has(newSum) && newSum < n) {
        queue.push([newSum, count + 1]);
        set.add(newSum);
      }
    }
  }
  return 0;
}

console.log(numSquares(12));
