/**
 * In Ts the function is same as the 
 * js but it will be there a return type like 
 * void means nothing and what data type we should 
 * return that will we have to give in function
 * 
 * @author meganathan
 */

// Create a new function
let a = 1;
let b = 10;
function printName(a: number, b: number): number {
    return a + b;

}
console.log(printName(a, b));
