// Calculate the time required for a person to buy movie tickets. Each person in the queue has a certain number of tickets they need to buy. The person at the front of the queue buys a ticket and goes to the end of the line if they need more tickets. This process continues until all people have bought their required tickets.
/**
 * Problem Analysis
goal: Determine the time taken for a specific person to buy all their tickets.
Each queue member buys one ticket per turn. After buying, if they need more tickets, they return to the queue's end.
input: [2,3,2], person at position 2, output 6
 2,3,2 --> 3,2,2 --> 2,2,3 --> 2,3,2 --> 3,2 --> 2,3
 * Algorithm Formulation
 use a queue (Array)
 loop through the queue until the targeted person has bought all their tickets
 */

// Code Development
function timeToBuyTickets(tickets, personPosition) {
  // intialize a counter for time
  const queue = [...tickets];
  let time = 0;
  let i = 0;
  // loop through the queue, decrementing ticket numbers, increasing time, and reassigning i
  while (queue[personPosition] > 0) {
    if (queue[i] > 0) {
      queue[i]--;
      time++;
    }
    i = (i + 1) % queue.length;
  }
  // if the targeted person's ticket count reaches zero, return the time
  // otherwise continue looping keeping track of the position
  return time;
}

// Execution (Test cases)
console.log(timeToBuyTickets([2, 3, 2], 2));

// Review
