/**
 * In Ts the Generics is refers as the Any type
 * you can give in the class like you can create arr
 * with the type of any using like this <T>
 * Here the example
 *
 * @author meganathan
 */
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    // pop method remove the element in last
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    // Return the item
    Stack.prototype.printItems = function () {
        return this.items;
    };
    return Stack;
}());
var NumberStack = new Stack();
NumberStack.push(1);
NumberStack.push(2);
console.log(NumberStack);
console.log(NumberStack.printItems());
// Here i create for string stacks
var stringStack = new Stack();
stringStack.push("dinesh");
stringStack.push('meganathan');
console.log(stringStack.printItems());
