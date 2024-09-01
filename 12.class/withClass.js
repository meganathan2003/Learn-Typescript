// With class
var User = /** @class */ (function () {
    // create a constructor
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // Create a func
    User.prototype.greet = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
var createUser = new User("Dinesh", "S", 20);
console.log(createUser.greet()); // call the names
console.log(createUser.getAge());
