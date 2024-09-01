/**
 * 
 */

// wihtout inheritance in Ts
// class User {
//     firstName: string;
//     lastName: string;
//     age: number;


//     constructor(firstName: string, lastName: string, age: number) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     // create a new function
//     greet() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     getAge() {
//         return this.age;
//     }
// }


// // Create a admin class
// class Admin {
//     firstName: string;
//     lastName: string;
//     age: number;
//     role: string;

//     constructor(firstName: string, lastName: string, age: number, role: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.role = role;
//     }

//     greet() {
//         return `${this.firstName} ${this.lastName} ${this.role}`;
//     }

//     getAge() {
//         return this.age;
//     }

//     manageUsers() {
//         return `Managing users with role ${this.role}`;
//     }

// }

// // create a new instance
// let user1 = new User("dinesh", "s", 20);
// let admin1 = new Admin("dinesh", "d", 21, "Adminstrator");

// console.log(user1.greet());
// console.log(user1.getAge());

// console.log(admin1.greet());
// console.log(admin1.getAge());
// console.log(admin1.manageUsers());


// -=-=-=-==-=-=-=-=-=-=-=--=-=-=-=-=-=-=--=-=-=-==-=-=-=-=-=-=-

class Person {
    firstName: string;
    lastName: string;
    age: number;


    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // create a new function
    greet() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        return this.age;
    }
}

// Create user class
class User extends Person { // you can use Extends keyword for used that property
    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age); // super func call that person class 
    }

}

class Admin extends Person {

    // We can create a separeate role for inside this class
    role: string;

    constructor(firstName: string, lastName: string, age: number, role: string) {
        super(firstName, lastName, age); // super func call that person class 
        this.role = role

    }

    greet(): string {
        return `${this.firstName} ${this.lastName} ${this.role}`;
    }

    manageUsers() {
        return `Managing users with role ${this.role}`;
    }
}

// create a new instance
let user1 = new User("dinesh", "s", 20);
let admin1 = new Admin("dinesh", "d", 21, "Adminstrator");

console.log(user1.greet());
console.log(user1.getAge());

console.log(admin1.greet());
console.log(admin1.getAge());
console.log(admin1.manageUsers());




