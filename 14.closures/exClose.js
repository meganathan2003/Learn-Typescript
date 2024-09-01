/**
 * In ts the closures mean the
 * variable you define in the
 * particular function and also
 * create a function in that above
 * function so that i wont affect any
 * other variable or code
 *
 * @author meganathan
 */
// without closuers
// let counterValue = 0;
// function incrementCounter() {
//     counterValue++;
// }
// function getCounterValue() {
//     return counterValue;
// }
// incrementCounter(); // this will increase the number
// getCounterValue();
// with closuers
function createCounter() {
    var counterValue = 0;
    // i want to return the object
    /**
     * Here we define as a obj and yeah
     * increment is property also a key in
     * obj we can say both
     */
    return {
        increment: function () {
            counterValue++;
        },
        getValue: function () {
            return counterValue;
        }
    };
}
/**
 * Here benefit is we can create multiple
 * instances in one function like below
 */
var counter1 = createCounter();
var counter2 = createCounter();
counter1.increment();
counter2.increment();
counter2.increment();
counter2.increment();
console.log(counter1.getValue()); // 1
console.log(counter2.getValue()); // 3
