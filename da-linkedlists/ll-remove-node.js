/*
PACER
Problem Analysis:
Given a linked list, remove the n-th node from the end of list and return its head. Try solving this problem using the Two-Pointer Technique.
two-pointer can be used because we can be one pointer n-th node ahead of the other
 input: 1->2->3->4->5, n = 2
 output: 1->2->3->5

Algorithm Formulation:
two pointer technique is great because you are comparing nodes in a linked list
pseudo code:
// initialize two pointers
// move the right pointer n steps ahead of the left
// when the right pointer points to null, the left pointer points to the n-th node from the end
// remove n-th node
// return head

// edge cases to account for: linkedList has one node or n equals the length of the linkedlist
*/

//Code:
function removeNthFromEnd(head, n) {
  let left = head;
  let right = head;

  // iterate to get right pointer n steps ahead of left
  while (n > 0) {
    if (right.next === null) {
      // if n is equal to the length, remove head
      if (n === 1) return head.next;
      //if n is greater than the length
      else return head;
    }
    right = right.next;
    n--;
  }

  // iterate until right pointer reaches the end of the LL, moving both pointers
  while (right.next !== null) {
    right = right.next;
    left = left.next;
  }

  // remove node
  left.next = left.next.next;

  return head;
}

class LinkedNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Execution (test cases):
const firstNode = new LinkedNode(
  'first',
  new LinkedNode(
    'second',
    new LinkedNode('third', new LinkedNode('fourth', new LinkedNode('fifth')))
  )
);

const soloNode = new LinkedNode('solo', null);

console.log(removeNthFromEnd(firstNode, 6));
console.log(soloNode);

/*
  Review:
  Two pointer allows for time complexity of O(n)
  constant space complexity O
  */
