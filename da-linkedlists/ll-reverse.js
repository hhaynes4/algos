/*
Problem Analysis
goal: Given the head of a singly linked list, reverse the list and return its head.
input:
1 -> 2 -> 3 -> 4 -> 5 -> NULL
output:
5 -> 4 -> 3 -> 2 -> 1 -> NULL

Algorithm Formula
approach: three pointers
null <- 1 <- 2 <- 3 <- 4  5 -> NULL
  |
        |
             |

Code
*/
function reverseList(head) {
  let left = null;
  let middle = head;
  let right = null;

  while (middle !== null) {
    right = middle.next; //store value
    middle.next = left; //change link
    left = middle; //move pointers forward
    middle = right; //move pointers forward
  }

  // Return the new head of the reversed list
  return left;
}

class LinkedNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const fiveLinkedList = new LinkedNode(1, new LinkedNode(2, new LinkedNode(3, new LinkedNode(4, new LinkedNode(5)))))

const oneLinkedList = new LinkedNode(1)
console.log(reverseList(fiveLinkedList))

/*
Execute
Review
*/
