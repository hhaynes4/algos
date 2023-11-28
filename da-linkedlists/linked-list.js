class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function insertAtPosition(data, position, head) {
  const newNode = new ListNode(data);
  // if adding to the beginning (0-index)
  if (position === 0) {
    newNode.next = head;
    // return new head
    return newNode;
  }
  let currentNode = head;
  let index = 0;
  // iterate through the linked list until we get to position before insert
  while (currentNode && index < position - 1) {
    currentNode = currentNode.next;
    index++;
  }
  // new node point to node after insert
  newNode.next = currentNode.next;
  // node before insert point to new node
  currentNode.next = newNode;
  // return head
  return head;
}

// Delete the first occurrence of a value
function deleteNode(value, head) {
  let currentNode = head;
  // if the value belongs to the head return the next value as the new head
  if (currentNode.data === value) {
    return currentNode.next;
  }
  // iterate through linkedlist looking for value
  while (currentNode.next && currentNode.next.data !== value) {
    currentNode = currentNode.next;
  }
  // if we arent at the tail, remove it
  if (currentNode.next) {
    currentNode.next = currentNode.next.next;
  }
  return head;
}

function containsValue(value, head) {
  let currentNode = head;
  while (currentNode) {
    if (currentNode.value === value) return true;
    currentNode = currentNode.next;
  }
  return false;
}