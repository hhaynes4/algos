/*
* Problem Analysis:
goal: implement a stack with its fundamental operations: push, pop, and peek.
input: push(1), push(2), push(3) --> pop() == 3
* Algorithm Formulation:
Push: Add an element to the end of the array.
Pop: Remove the last element from the array.
Peek: Access the last element of the array without removing it.
*/

// Code Development
class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack[this.stack.length] = element;
  }

  pop() {
    if (this.isEmpty()) {
      return 'Nothing to pop!';
    }
    const popped = this.stack[this.stack.length - 1];
    //remove last element
    this.stack.length--;
    return popped;
  }

  peek() {
    if (this.isEmpty()) {
      return 'Nothing to peak!';
    }
    return this.stack[this.stack.length - 1];
  }
  // Additional helper method to check if the stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack);
console.log(stack.isEmpty());
