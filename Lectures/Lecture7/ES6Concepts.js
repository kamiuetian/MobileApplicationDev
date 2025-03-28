//ES Concepts
//1. let and const
//classes
//arrow functions
//Desctructuring
import MyModule from "./MyModule.js";
import { anotherModule } from "./MyModule.js";
let arr = [1, 2, 3, 4, 5, 6, 7];
let [a, b, c, d, e] = arr;
console.log(a);
//onject destructuring
let obj = { name: "John", age: 30, city: "New York" };
let { abc } = obj;
console.log(abc);
function displayName({ name }) {
  console.log(name);
}
displayName(obj);

//Modules
