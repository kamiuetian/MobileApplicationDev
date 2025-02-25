let arr = [1, 2, 3, 4, 5];
console.log(arr[0]);
//difference from other languages
let arr1 = [[1, 2, 3, 4, 5], "hello", true, null, undefined, { name: "John" }];
console.log(arr1[0][0]);
/**Function */
function add(a, b) {
  return a + b;
}
function checkNumber(num) {
  return num % 2 === 0;
}

function displayevenandSum(func1, func2) {
  let sum = func1(10, 20);
  console.log(sum);
  let isEven = func2(sum);
  console.log(isEven);
}
displayevenandSum(add, checkNumber);
//assign fun to a variable
let test = add;
console.log(test(10, 20));
//return a function from a function
function parent() {
  return function () {
    console.log("I am a child function");
  };
}
let child = parent();
child();

/**Array map method */
let arr2 = [1, 2, 3, 4, 5];
function square(num) {
  return num * num;
}
let arr3 = arr2.map(square);
function filterEven(num) {
  return num % 2 === 0;
}
let arr4 = arr2.filter(filterEven);
//[F,T,F,T,F]
//reduce
function redcer(x, y) {
  return x + y;
}
let sum = arr2.reduce(redcer, 100);
//reducer(0,1) => 1
//reducer(1,2) => 3
//reducer(3,3) => 6
