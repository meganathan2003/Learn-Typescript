/**
 * In Typescript class is
 */
// Without using class
var user1 = { firstName: "Dinesh", lastName: "S", age: 21 };
var user2 = { firstName: "Dinesh", lastName: "S", age: 20 };
// Create a new function
function greetUser(user) {
    return "Hello, ".concat(user.firstName, " ").concat(user.lastName);
}
// get age func
function getAge(user) {
    return user.age;
}
console.log(greetUser(user1)); // otp = Hello, Dinesh S
console.log(getAge(user1));
