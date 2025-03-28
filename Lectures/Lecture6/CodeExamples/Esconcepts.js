//Arrow function
function add(a, b) {
  return a + b;
}
add(3, 4);
const add_arrow = (a, b) => {
  return a + b;
};
// arrow function with single line
const add_arrow_single = (a, b) => a + b;
// arrow function with single argument
const square = (x) => x * x;
// arrow function with no argument or more than 1 argument
const greet = () => "Hello";
const greet1 = (name, age) => "Hello";
//arrow functio with more than one line
const greet2 = () => {
  console.log("Hello");
  return "Hello";
};
const returnObject = () => {
  return { name: "John", age: 25 };
};
//anonymous function
let arr = [1, 2, 3, 4, 5];
let result = arr.map((x) => {
  return x ** 2;
});
