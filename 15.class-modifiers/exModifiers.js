/**
 * In Ts the access modifiers means
 * you cannot acess the age or name or something
 * in the User class because you property is
 * private and you can only use in class there are
 * three property private protected and public
 */
// using class modifiers
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    // Now getter and setter
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    // now setter
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setAge = function (age) {
        this.age = age;
    };
    return User;
}());
var user = new User("dinesh", 20);
// this is how we can access the name and age
console.log(user.getAge());
console.log(user.getName());
// we can set the name and age
user.setAge(21);
user.setName("meganathan");
console.log(user.getAge());
console.log(user.getName());
