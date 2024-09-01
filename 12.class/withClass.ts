
/**
 * With class in the typescript 
 * you can define the name also
 * you create a function like getage
 * and getuser like getter and setter 
 * in java 
 */

// With class

class User {
    firstName: string;
    lastName: string;
    age: number;

    // create a constructor
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Create a func
    greet() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        return this.age;
    }

}

let createUser = new User("Dinesh", "S", 20);

console.log(createUser.greet()); // call the names
console.log(createUser.getAge());



