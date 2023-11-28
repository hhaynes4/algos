// First In, First Out
// do not use any native array methods
function Queue() {
  this.storage = {};
  this.index = 0;
}

// constant time complexity (add to the end)
Queue.prototype.enqueue = function (value) {
  if (value !== null && value !== undefined) {
    this.storage[this.index] = value;
    this.index++;
  }
};

// linear time complexity (take from the beginning)
Queue.prototype.dequeue = function () {
  if (this.index === 0) return;
  let toBeDeleted = this.storage[0];

  for (let i = 0; i < this.index; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  delete this.storage[this.index - 1];
  this.index--;
  return toBeDeleted;
};

// TEST
const queue = new Queue();
queue.enqueue(0);
console.log(queue);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue);
