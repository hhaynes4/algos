/**
 * @param {string[]} tokens
 * @return {number}
 */

/**
 * Problem Analysis:
goal: return an integer that represents the value of the RPN expression
RPN: is a mathematical notation in which operators follow their operands
input: "2","1","+","3","*"]
output: 9 //((2+1)*3)

input: ["4","13","5","/","+"]
output: (4 + (13 / 5)) => 6 (rounds towards zero)

// any operator is applied to the previous two values

input: ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
putput: 22
 *
 *
 * Questions:
 can I assume all elements will be strings?
 */

    // iterate through the tokens
        // if its a number, push onto the stack
        // if its an operator, perform operation on last two numbers on the stack
        // return the last remaining number on the stack
// remember to round towards zero
var evalRPN = function(tokens) {
    const stack = [];

    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*" || tokens[i] === "/") {
            let number1 = stack.pop()
            let number2 = stack.pop()
            if (tokens[i] === '/') {
            let evaluated = Number(eval([number2,tokens[i],number1].join(' ')))
            if (evaluated < 0) {
                stack.push(Math.ceil(evaluated).toString())
            } else {
                stack.push(Math.floor(evaluated).toString())
            }   
        } else {
            stack.push(Number(eval([number2,tokens[i],number1].join(' ')))).toString() 
            }
        } else {
            stack.push(tokens[i])
        }
        console.log(stack)
    }
    return Number(stack[0])
};

console.log(evalRPN(["4","13","5","/","+"])) //6
console.log(Math.floor(13/5))

// keep the stack numbers (much easier!!)
var evalRPN2 = function(tokens) {
    const stack = [];

    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "+"){
            stack.push(stack.pop() + stack.pop())
        } else if (tokens[i] === "-") {
            // pay attention to order!!
            stack.push(-stack.pop() + stack.pop())
        } else if (tokens[i] === "*") {
            stack.push(stack.pop() * stack.pop())
        } else if(tokens[i] === "/") {
            let firstPop = stack.pop();
            let secondPop = stack.pop();
            console.log(firstPop)
            console.log(secondPop)
            let evaluated = secondPop/firstPop;
            console.log(evaluated)
            if (evaluated < 0) {
                stack.push(Math.ceil(evaluated))
            } else {
                stack.push(Math.floor(evaluated))
            }   
        } else {
            stack.push(Number(tokens[i]))
            console.log(stack)
        }
    }
    return stack[0]
};

console.log(evalRPN2(["4","13","5","/","+"])) //6