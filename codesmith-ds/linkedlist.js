function LinkedList() {
  this.head = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

// adds node to end of list
LinkedList.prototype.push = function (value) {
  // check to see if head exists, if it doesnt add head
  const newNode = new Node(value);
  console.log(newNode);
  if (!this.head) {
    console.log('entered');
    this.head = newNode;
    return;
  }
  let current = this.head;
  console.log(current);
  // else iterate through until the end and add it
  console.log(current.next);
  while (current.next !== null) {
    current = current.next;
  }
  current.next = newNode;
};

// returns true if value is present in the list
// linear time complexity
LinkedList.prototype.contains = function (value) {
  let found = false;

  let current = this.head;
  while (current) {
    if (current.value === value) {
      found = true;
      break;
    } else {
      current = current.next;
    }
  }
  return found;
};

const ll = new LinkedList();
ll.push(1);
ll.push(2);
ll.push(3);
console.log(ll);
console.log(ll.contains(3));

// Bonus
// adds node to beginning of list
LinkedList.prototype.addToHead = function (value) {
  if (!this.head) return;
  const oldHead = this.head;
  this.head = new Node(value);
  this.head.next = oldHead;
};

console.log(ll);
ll.addToHead(0);
console.log(ll);

// Extra Bonus
// insert an item at the position specified
LinkedList.prototype.insert = function (value, position) {};

// Extra Bonus
// remove first occurrence of value from list
LinkedList.prototype.removeItem = function (value) {};

// Extra Bonus
// remove element at specified position in list
LinkedList.prototype.removePosition = function (position) {};
