/**
 * In Ts the access modifiers means 
 * you cannot acess the age or name or something
 * in the User class because you property is
 * private and you can only use in class there are 
 * three property private protected and public
 * 
 * @author meganathan 
 */


// using class modifiers
class User {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Now getter and setter
    public getName() {
        return this.name;
    }

    public getAge() {
        return this.age;
    }

    // now setter
    public setName(name: string) {
        this.name = name;
    }

    public setAge(age: number) {
        this.age = age;
    }

}


const user = new User("dinesh", 20);
// this is how we can access the name and age
console.log(user.getAge());
console.log(user.getName());

// we can set the name and age
user.setAge(21);
user.setName("meganathan");

console.log(user.getAge());
console.log(user.getName());



