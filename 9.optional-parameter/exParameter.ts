/**
 *  Here the ? parameter is used of optional 
 * parameter it is used for it does not return
 * undefined
 * @param a 
 * @param b 
 * @param c 
 * @returns the string
 */

// Create a new Function
var concatString = function (a: string, b: string, c?: string) { // ? this is optional parameter
    return a + b + c;
}

console.log(concatString("a", "b", "c"));
console.log(concatString("a", "b"));

