var MinStack = function () {
  this.stack = [];
  this.minimum = Infinity;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  // push onto the stack
  this.stack[this.stack.length] = val;
  this.minimum = Math.min(val, this.minimum);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length === 0) return;
  // removes the last element
  const poppedValue = this.stack.pop(); // Remove the last element
  if (poppedValue === this.minimum) {
    // If the popped value was the minimum, find the new minimum in the remaining elements.
    this.minimum = Math.min(...this.stack);
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  // return the last element
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minimum;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top()); // return 0
console.log(minStack.getMin()); // return -2
