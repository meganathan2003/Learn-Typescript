/**
 * In Ts the static function
 * we are created for we cannot
 * create instance of obj each time
 * we assgin the value and isAdult
 * method is Belongs to User class but the
 * age proprety is public for that age
 *
 * @author meganathan
 */
// Create a user clas
var User = /** @class */ (function () {
    function User(name, age) {
        this.age = age;
        this.name = name;
    }
    User.isAdult = function (age) {
        return age >= 18; // return boolean
    };
    return User;
}());
console.log(User.isAdult(20));
