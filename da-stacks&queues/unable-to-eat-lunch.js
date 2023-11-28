// sandwiches are in a stack
// the student will open eat the top sandwich if it matches their prefernce and then leave the queue. Otherwise, the student goes to the end of the queue
// This process continues until either all sandwiches are eaten or no student can eat the top sandwich.

/**
 * Problem Analysis
goal: Count the number of students who can't get their preferred sandwich.
Students only eat the sandwich if it matches their preference, otherwise, they move to the end of the line.
Input: Students = [1,1,0,0], Sandwiches = [0,1,0,1] (Output: 0)
Input: Students = [1,1,1,0,0,1], Sandwiches = [1,0,0,0,1,1] (Output: 3)
 * Algorithm Formulation:
queue for students, stack for sandwiches
approach: while sandwiches are available, check the student at the front of the queue,
    if it matches top sandwich, remove both
    else, move student to the end of the queue
count the remaining students
 * Code:
 */
function countStudents(students, sandwiches) {
    let queue = [...students]
    let stack = [...sandwiches]
    let attempts = 0;

    while (stack.length > 0 && attempts < queue.length) {
        if (queue[0] === stack[0]) {
            queue.shift()
            stack.shift()
            attempts = 0;
        } else {
            queue.push(queue.shift());
            attempts ++
        }
    }
    return queue.length;
}


// Execution (test cases):
console.log(countStudents([1,1,0,0],[0,1,0,1])) //  (Output: 0))
console.log(countStudents([1,1,1,0,0,1],[1,0,0,0,1,1])) //3
// Review

// students       sandwich
// 1,1,1,0,0,1    1,0,0,0,1,1
// 1,1,0,0,1      0,0,0,1,1
// 1,0,0,1,1      0,0,0,1,1
// 0,0,1,1,1      0,0,0,1,1
// 0,1,1,1        0,0,1,1
// 1,1,1          0,1,1
// three students left and none want the top sandwich