/**
 * Problem Analysis:
goal: Identify the dog who has seen Oliver's hat.
Use a queue to track the order of dogs to ask, starting with Oliver's best friend.
be cautious of cycles!
 * Algorithm Formulation:
use a queue to keep track of which dog to ask next
use a set to track dogs that have already been asked
enqueue the initial dog
while the queue is not empty,
dequeue the next dog and check their info
if a dog's suggestion includes "HAT" return that dog's name
otherwise, enqueue their suggestions, excluding dogs that have already been asked
 * Code:
 */

function findHat(dogs, startingDog) {
  const queue = [startingDog];
  const set = new Set();

  while (queue.length > 0) {
    let current = queue.shift();
    // if the current dog has seen the hat, return that dog
    if (dogs[current].some((el) => el === 'HAT')) {
      return current;
    } else {
      // check to see if we have seen the dog before, if not add it to the queue
      if (!set.has(current)) {
        set.add(current);
        queue.push(...dogs[current]);
      }
    }
  }
  return 'cycle!';
}

// Execute (test cases):
dogs = {
  Carter: ['Fido', 'Ivy'],
  Ivy: ['HAT'], // Ivy has seen the hat
  Loki: ['Snoopy'],
  Pepper: ['Carter'],
  Snoopy: ['Pepper'],
  Fido: [],
};
console.log(findHat(dogs, 'Loki'));

// Review:
