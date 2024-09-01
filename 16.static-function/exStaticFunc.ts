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
class User {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }

    static isAdult(age) {
        return age >= 18; // return boolean
    }

}

console.log(User.isAdult(20)); // true
