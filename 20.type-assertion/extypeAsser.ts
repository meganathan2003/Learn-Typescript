/**
 * type assertion is commonly used for 
 * set the type in Html using TS
 * 
 * @author meganathan
 */

// This act as the html element input tag
const element = document.getElementById('Myelement') as HTMLInputElement;

element.value = "dinesh";
console.log(element.value);
