/**
 * In Type script the default parameter
 * is if we did not send the value to the
 * parameter it will default give or set the value
 * in the parameter
 *
 * @author meganathan
 */
// Create a new variable
var concatString = function (a, b, c) {
    if (c === void 0) {
        c = "c";
    }
    return a + b + c;
};
console.log(concatString("A", "B"));
