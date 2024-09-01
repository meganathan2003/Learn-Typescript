/**
 * in TS any keyword is used for we can change the 
 * data type using any keyword it means in future 
 * we can the change the value if needed
 * 
 */


var item: any = { id: 1, name: "dinesh" };
item = { id: 2 }; // It won't throw any error
console.log(item);
