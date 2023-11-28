// Code:
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
  }
  //goal: Write a function that returns the total number of nodes in a linked list.
  //approach: iterate through the list, incrementing a count variable
  function findLength(head){
    let count = 1
    let current = head
  
    while (current.next !== null) {
      current = current.next
      count++
    }
  
    return count;
  }
  
  //goal: Write a function that returns the middle node of a linked list. If there are two middle nodes, return the second middle node.
  //approach: fast and slow pointers
  function findMiddle(head){
    let slow = head;
    let fast = head;
  
    while (fast !== null && fast.next !== null) {
      slow = slow.next //move one step
      fast = fast.next.next //move two steps
    }
  
    return slow;
  }
  
  //goal: Write a function that removes a node from the linked list given its value.
  //approach:
  //input: 1 -> 2 -> 3 -> 4 -> 5 -> null, 3
  //.   |    
  
  function removeNode(head, value){
    let dummy = new ListNode(-1)
    dummy.next = head
  
    let current = dummy
  
    while (current.next !== null) {
      if (current.next.val === value) {
        current.next = current.next.next //remove node
        return dummy.next // returns head
      } else {
        current = current.next
      }
    }
    return null;
  }
  
  
  // Execution:
  const listOfFive = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
  
  //console.log(findLength(listOfFive))
  //console.log(findMiddle(listOfFive))
  console.log(removeNode(listOfFive, 3))
  
  // Review: