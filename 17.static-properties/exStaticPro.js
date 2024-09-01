/**
 * In Ts the static properties are
 * refers to an we give the static
 * properties in the user class
 * here the example
 *
 * @author meganathan
 */
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        User.totalUsers++;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.getTotalUsers = function () {
        return User.totalUsers;
    };
    // Here we define a static property
    User.totalUsers = 0;
    return User;
}());
var createUser = new User("dinesh");
var createUser2 = new User("meganathan");
console.log(createUser.getName());
console.log(createUser2.getName());
console.log(User.getTotalUsers());
