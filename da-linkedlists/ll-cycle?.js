/*
 * Problem Analysis:
 * goal: determine if a linked list has a cycle in it
 * input: [1,2,3,4,5,2] --> true
 * input: [1,2,3,4] --> false
 *
 * Algorithm Formulation:
 * approach: use a fast and a slow pointer, if the fast pointer got to null: no cycle, if the pointers equal each other: yes cycle!
 * pseudo code:
 *   initialize pointers
 *   iterate as long as fast pointer isn't null
 *   move the slow pointer one step forward
 *   move the fast pointer two steps forward
 *   if they are equal, and return true
 *   return false
 */

// Code:
function hasCycle(head) {
  // Initialize your pointers here:
  let slow = head;
  let fast = head;

  // While loop to traverse through the linked list:
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  // Determine if a cycle exists:
  return false;
}

// Execute:
class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const linkedListFalse = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

const linkedListTrue = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
const cycleNode = new ListNode(6);
linkedListTrue.next.next.next.next.next = cycleNode;
cycleNode.next = linkedListTrue.next.next;

const linkedListBeg = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4)))
);
const cycleNode2 = new ListNode(5);
// Link the last node in linkedListBeg to cycleNode2
linkedListBeg.next.next.next = cycleNode2;
// Link cycleNode2 to the beginning of linkedListBeg
cycleNode2.next = linkedListBeg;

console.log(hasCycle(linkedListFalse));
console.log(hasCycle(linkedListTrue));
console.log(hasCycle(linkedListBeg));
