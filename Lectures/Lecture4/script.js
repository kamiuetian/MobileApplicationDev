/**arrays */
const students = [
  1,
  2,
  3,
  "a",
  "b",
  "c",
  [],
  { object: "object" },
  function myfunc() {},
];
//accessing arrays.
console.log(students[3]);
//functions
function myFunction(a, b) {
  console.log(a() + b);
}

//myFunction(2, 5);
//myFunction([1, 2], [2, 3]);
function abc() {
  return 3;
}
myFunction(abc, 30);
const otherfunc = myFunction;
otherfunc(abc, 20);

function outer() {
  function inner() {
    console.log("i am an inner function");
  }
  inner();
  return inner;
}
const mycaller = outer();
mycaller();
