/**
 * In Ts the Generics is refers as the Any type
 * you can give in the class like you can create arr
 * with the type of any using like this <T>
 * Here the example 
 * 
 * @author meganathan
 */


class Stack<T> {

    private items: T[] = [];

    push(item: T) {
        this.items.push(item);
    }

    // pop method remove the element in last
    pop() {
        return this.items.pop();
    }

    // Return the item
    printItems() {
        return this.items;
    }

}

const NumberStack = new Stack<number>();
NumberStack.push(1);
NumberStack.push(2);

console.log(NumberStack);

console.log(NumberStack.printItems());

// Here i create for string stacks
const stringStack = new Stack<string>();
stringStack.push("dinesh");
stringStack.push('meganathan');

console.log(stringStack.printItems());

