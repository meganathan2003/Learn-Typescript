/**
 * In type script instead of function
 * we are using the interfaces
 * it like one we assign it we can just change the
 * interface obj it will change where we it be used
 * that
 *
 * @author meganathan
 */
// Function to create a greeting User
function greetUser(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
}
// Create a new Function to log user Details
function logUserDetails(user) {
    console.log("User:  ".concat(user.firstName, " ").concat(user.lastName, " ").concat(user.age));
}
var user1 = { firstName: "Dinesh", lastName: "S", age: 21 };
console.log(greetUser(user1));
logUserDetails((user1));
