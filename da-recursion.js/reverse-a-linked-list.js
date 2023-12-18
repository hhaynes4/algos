/**
 * Problem Analysis
 * goal: reverse a singly linked list
 * Input: 1 -> 2 -> 3, Output: 3 -> 2 -> 1
 * Input: 4 -> 5 -> 6, Output: 6 -> 5 -> 4
 * Algorithm Formulation
 * Divide the list into two parts: the first node and the rest of the list.
 * Recursively call the reverse function on the rest of the list.
 * Link the first element to the end of the reversed list.
 * Return the new head of the reversed list.
 * Code:
 */
function reverseList(head) {
    // base case: the end of the list
    if (!head|| !head.next) {
        return head;
    }
    const first = head
    const rest = head.next

    const reversedRest = reverseList(rest)

    rest.next = first
    first.next = null;

    return reversedRest;
}

// Execution
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}
const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

console.log(reverseList(list))
console.log(reverseList(new ListNode(1)))
/**
 * Review:
 * time complexity: O(n)
 * space complexity: O(n) for the call stack
 */