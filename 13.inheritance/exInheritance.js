/**
 *
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // create a new function
    Person.prototype.greet = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
// Create user class
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(firstName, lastName, age) {
        return _super.call(this, firstName, lastName, age) || this; // super func call that person class 
    }
    return User;
}(Person));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(firstName, lastName, age, role) {
        var _this = _super.call(this, firstName, lastName, age) || this; // super func call that person class 
        _this.role = role;
        return _this;
    }
    Admin.prototype.greet = function () {
        return "".concat(this.firstName, " ").concat(this.lastName, " ").concat(this.role);
    };
    Admin.prototype.manageUsers = function () {
        return "Managing users with role ".concat(this.role);
    };
    return Admin;
}(Person));
// create a new instance
var user1 = new User("dinesh", "s", 20);
var admin1 = new Admin("dinesh", "d", 21, "Adminstrator");
console.log(user1.greet());
console.log(user1.getAge());
console.log(admin1.greet());
console.log(admin1.getAge());
console.log(admin1.manageUsers());
