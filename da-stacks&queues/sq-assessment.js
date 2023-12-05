// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// use the stack to keep track of the val and current min
var MinStack = function () {
  this.stack = [];
};

// Push element x onto stack.
MinStack.prototype.push = function (x) {
  if (this.stack.length === 0) {
    this.stack.push({ val: x, min: x });
  } else {
    // store the minimum at each level
    let min = Math.min(this.stack[this.stack.length - 1].min, x);
    this.stack.push({ val: x, min: min });
  }
};

// Removes the element on top of the stack.
MinStack.prototype.pop = function () {
  if (this.stack.length > 0) {
    this.stack.pop(); // top min layer is removed too
  }
};

// Get the top element.
MinStack.prototype.top = function () {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1].val; // top min layer is removed too
  }
};

// Retrieve the minimum element in the stack.
MinStack.prototype.getMin = function () {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1].min;
  }
  return 'no min!';
};
