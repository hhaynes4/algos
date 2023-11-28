/*
Problem Analysis: Given an integer n, determine if it's a "happy number". A happy number is a number which eventually reaches 1 when replaced by the sum of the square of each digit. Use the Fast & Slow pointer pattern to determine this.

Algorithm Formulation:
if a cycle is detected before we reach one, the number is not happy
repeatedly transform the number, using two pointers moving at different speeds, if a cycle is detected (pointers meet before reaching one), the number is not happy

Code Development: Draft the solution while keeping a keen eye on the logic behind each pointer movement.

Execution: Validate with a multitude of test cases, emphasizing boundary conditions.

Review: Reflect on the efficiency and clarity of your code. Can enhancements be made?
*/
function isHappyNumber(n) {
    // helper function to calculate the sum of squares
    function getSum(num) {
      let sum = 0;
      while (num > 0) {
        let lastDigit = num % 10;
        sum += lastDigit * lastDigit; // add the square
        num = Math.floor(num / 10); // get rid of the last digit and round down
      }
      return sum;
    }
      // Initialize your pointers here:
      let slowPointer = n; 
      let fastPointer = getSum(n) // moves the fast pointer one step ahead
      
      // loop until either a cycle is found(slow = fast) or the fast pointer reaches the number 1
      while (fastPointer !== 1 && slowPointer !== fastPointer) {
        slowPointer = getSum(slowPointer) // moves forward one step at a time
        fastPointer = getSum(getSum(fastPointer)) // moves forward two steps at a time!
      }
      
      
      // Return true if number becomes 1:
      return fastPointer === 1;
  }
  
  console.log(isHappyNumber(1024))