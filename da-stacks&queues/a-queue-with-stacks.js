/**
 * Problem Analysis:
goal: create a queue data structure (First-in-first-out) with two stacks
 * Algorithm Formulation:
stack 1 = [4,5,6,7] enqueue operations
stack 2 = [3,2,1] dequeue operations
enqueue: push elements onto the 'enqueue' stack
dequeue: if dequeue stack is empty, transfer all elements from the enqueue stack onto it (reversing the order), pop the last element
 */

// Code:
class Queue {
  constructor() {
    this.enqueueStack = [];
    this.dequeueStack = [];
  }
  enqueue(element) {
    this.enqueueStack.push(element);
  }
  dequeue(element) {
    if (this.dequeueStack.length === 0) {
      while (this.enqueueStack.length > 0) {
        this.dequeueStack.push(this.enqueueStack.pop());
      }
    }
    return this.dequeueStack.pop();
  }
}

// Execution:
const queue = new Queue
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.dequeue())

// Review:
