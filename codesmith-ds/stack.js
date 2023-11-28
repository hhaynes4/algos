// Last In, First Out
// do not use any native array methods
function Stack() {
  this.storage = {};
  this.index = 0;
}

// constant time complexity
Stack.prototype.push = function (value) {
  this.storage[this.index] = value;
  this.index++;
};

// constant time complexity
Stack.prototype.pop = function () {
  delete this.storage[this.index - 1];
  this.index--;
};

const stack = new Stack();
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
console.log(stack);
