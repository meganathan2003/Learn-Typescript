/**
 * In type script instead of function
 * we are using the interfaces
 * it like one we assign it we can just change the 
 * interface obj it will change where we it be used 
 * that
 * 
 * @author meganathan
 */


// Create a new Interface
interface User {
    firstName: string,
    lastName: string,
    age?: number // we can set the optional parameters
}


// Function to create a greeting User

function greetUser(user: User) {

    return `Hello ${user.firstName} ${user.lastName}`;

}

// Create a new Function to log user Details
function logUserDetails(user: User) {

    console.log(`User:  ${user.firstName} ${user.lastName} ${user.age}`);

}

let user1 = { firstName: "Dinesh", lastName: "S", age: 21 };
console.log(greetUser(user1));
logUserDetails((user1));