/**
 * Write the following function as an arrow function:
 * function addTwoNumbers(a, b){
 *    return a+b; 
 * }
 * @param {number} a
 * @param {number} b
 */
const addTwoNumbers = (a, b) => a + b;

/**
 * Write the following function as an arrow function:
 * function stringLength( myStr ){
 *   if(myStr.length < 10)
 *       return "short";
 *   return "long";
 * }
 * @param {string} myStr
 */
const stringLength = myStr => myStr.length < 10 ? "short" : "long";

/**
 * What is the following arrow function doing?
 * let fn = (a,b) => { a>b ? console.log(a) : console.log(b) }
 * 
 * This arrow function is taking two inputs, a and b, and seeing if a is great than b.
 * If the condition is true, the value of a is logged.
 * Else, the value of b is logged to the console
 * The function does not have a return value (or rather, returns undefined)
 */

/**
 * Write an example to demonstrate the use of the map function on an array.
 * 
 * The following code creates an array of numbers, then uses the map function to multiple each number by 2
 */
let myArray = [1, 2, 3];
myArray = myArray.map(n => n * 2);