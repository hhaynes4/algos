/**
 * Problem Analysis:
 * goal: find the middle node (second if even number of nodes)
 * ex. 1,2,3,4,5,6 --> 4
 * ex. 1,2,3,4,5 --> 3
 * 
 * Algorithm Formulation:
 * // initialize both pointers at the head
 * // iterate through the linkedlist
 * // move the fast pointer two steps ahead
 * // move the slow pointer one step ahead
 * // when the fast pointer is at the end, the slow pointer will point to the middle
*/ 

//Code:
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function findMiddle(head) {
    // Initialize your pointers here:
    let slow = head;
    let fast = head;
    
    // While loop to traverse through the linked list:
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next
    }
    
    // Return the middle node:
    return slow;
}

//Execution:
const linkedListOdd = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

const linkedListEven = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))

console.log(findMiddle(linkedListOdd))
console.log(findMiddle(linkedListEven))

/*Review:
time complexity: O(n)
space complexity: O(1)
*/