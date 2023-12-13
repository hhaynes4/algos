/**
 * Problem Analysis:
goal: Given an integer n, determine if it is a power of four. In other words, check if there exists an integer x such that n == 4^x.
 * Algorithm Formulation:
// check if n is greater than 0
// check if there is only one bit set in n, i.e. n is a power of 2
// Ensure that the bit is in the correct position for a power of four (odd number of zeros following the bit).
* Code:
 */
function isPowerOfFour(n) {
    // base case:
    if (n === 1) {
        return true
    // base case:
    } else if (n < 1 || n % 4 !== 0) {
        return false;
    }
    // keep dividing by 4
    return isPowerOfFour(n / 4)
}

// Execution
console.log(isPowerOfFour(16)) // true
console.log(isPowerOfFour(15)) // false
console.log(isPowerOfFour(1)) // true

/**
Time Complexity: O(log n) due to the division by four at each step.
Space Complexity: O(log n) due to the recursive call stack.
 */