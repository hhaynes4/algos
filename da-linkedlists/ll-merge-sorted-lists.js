/*
Problem Analysis:
goal: Given two sorted linked lists, merge them together in ascending order and return the merged linked list.
Input:
Linked List 1: 1 -> 2 -> 4
Linked List 2: 1 -> 3 -> 4
Output: 
1 -> 1 -> 2 -> 3 -> 4 -> 4


Algorithm Formulation
pseudo code
approach: two pointers comparing and merging from the end of the linkedLists


Code
*/
function mergeTwoLists(l1, l2) {
    // head to hold result
    let mergedHead = new LinkedNode(-1)

    let current = mergedHead;

    //iterate through linked lists and compare
    while (l1 !== null && l2 !== null) {
        if (l1.data < l2.data) {
            //connect to linked list
            current.next = l1
            // move to next node in l1
            l1 = l1.next
        } else {
            current.next = l2
            l2 = l2.next
        }
        current = current.next // move to next node in merged list!
    }

    // merge any remaining nodes (of l1 or l2)
    current.next = l1 !== null ? l1 : l2

    return mergedHead.next // dont return dummy head
}



/*
Execution(test cases)
Review
*/