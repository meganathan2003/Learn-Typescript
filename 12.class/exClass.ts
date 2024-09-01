/**
 * In Typescript class is without using
 * class we are create a multiple function
 * with the same name as parameter it give
 * the error and sometimes undefined
 */

// Without using class
let user1 = { firstName: "Dinesh", lastName: "S", age: 21 };
let user2 = { firstName: "Dinesh", lastName: "S", age: 20 };


// Create a new function
function greetUser(user: { firstName: string, lastName: string }) {

    return `Hello, ${user.firstName} ${user.lastName}`;

}

// get age func
function getAge(user: { age: number }) {
    return user.age;
}

console.log(greetUser(user1)); // otp = Hello, Dinesh S
console.log(getAge(user1));

