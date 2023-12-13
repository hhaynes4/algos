// Print Immutable Linked List in Reverse (Easy - 15 Minutes)


/**
 * Problem Analysis:
goal: Print elements of an immutable linked list in reverse.
Approach: Consider how recursion can simulate a stack-like behavior to reverse the order of elements without modifying the list.
input: 1 --> 2 --> 3
output: 3, 2, 1
 * Algorithm Formulation:
Recursion: Serves as an implicit stack to reverse the print order.
// traverse the list recursively until the end,
// print the elemnts during the unwinding phase of recursion, which naturall reverses the order
* Code:
 */
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function printLinkedListInReverse(head) {
    // base case: if head does not exist
    if (head == null) {
        return;
    }
    printLinkedListInReverse(head.next)
    // the unwinding phase of recursion
    console.log(head.value)
}

// Execution
const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

printLinkedListInReverse(list)
// Review
// Time Complexity: O(n), where n is the number of nodes (due to single traversal).
// Space Complexity: O(n), as the recursion stack will have a maximum of n frames.