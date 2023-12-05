/**
 * Problem Analysis:
goal: Given a 4-wheel combination lock and a list of "dead" combinations that cannot be used, find the minimum number of turns needed to open the lock from "0000" to a target combination. Each turn can only rotate one wheel one digit up or down.
Input: Target = "0202", Deadends = ["0201","0101","0102","1212","2002"]
Output: 6
reason: A possible sequence to open the lock is "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
 * Algorithm Formulation:
 * // queue to keep track of combos to try with current turns, and a set to keep track of combos already visited
 * // use BFS to find the shorted path
 * // start at "0000" and count of 0;
 * Code:
 */
function openLock(deadends, target) {
  // Initialize BFS components here:
  // Queue, Set for deadends and visited combos
  const queue = [['0000', 0]];
  const set = new Set(...deadends);

  // BFS implementation:
  // Loop to explore each level, tracking the number of turns
  while (queue.length) {
    let [combo, count] = queue.shift();
    let numberfied = Number(combo);

    for (let i = 0; i < numberfied.length; i++) {
      numberfied[i] += 1;
      // check for a match
      let stringified = numberfied.toString(' ');
      if (stringified === target) {
        return count + 1;
      }
      // if the set doesn't contain the combo and if the current number isnt more than the target, add to the queue
      if (
        !set.has(numberfied.toString(' ')) &&
        numberfied[i] <= Number(target[i])
      ) {
        queue.push([stringified, count + 1]);
        set.add(stringified);
      }
    }
  }

  // Return the minimum turns or -1 if not possible
  return -1;
}

// Execution
console.log(openLock(["0201","0101","0102","1212","2002"],"0202")) //6


// Review
