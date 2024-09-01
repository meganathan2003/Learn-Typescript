/**
 * In ts type casting are we rationally
 * use to give the type or we tell to ts
 * this is User interface or type in JSON
 * data the typescript take as a any so if
 * access some field that's not inculde in json
 * id does not throw any error it print as undefined
 * Here an example
 *
 * @author meganathan
 *
 */
var jsonData = '{ "name" : "dinesh" , "age" : 20 }';
var user = JSON.parse(jsonData); // Here you see as keyword tell the TS take as User interface
console.log("".concat(user.name, " ").concat(user.age));
