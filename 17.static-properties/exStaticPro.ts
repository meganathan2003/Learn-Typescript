/**
 * In Ts the static properties are
 * refers to an we give the static 
 * properties in the user class
 * here the example
 * 
 * @author meganathan
 */

class User {
    name: string;
    // Here we define a static property
    static totalUsers: number = 0;

    constructor(name: string) {
        this.name = name;
        User.totalUsers++;
    }

    getName() {
        return this.name;
    }

    static getTotalUsers() {
        return User.totalUsers;
    }
}

const createUser = new User("dinesh");
const createUser2 = new User("meganathan");

console.log(createUser.getName());
console.log(createUser2.getName());
console.log(User.getTotalUsers());


