/**variable in js */
// there are no datatype
// int a=5; int a="abc";

// let, var, const
//var: legacy js
//let and const
// to create variable use let keyword
//to create constants const.
let var1 = 40;
const var2 = 40;
var1 = 50; //no problem
//var2 = 50; //error
/**datatypes */
let ex = 6;
console.log(typeof ex);
ex = 4.5;
console.log(typeof ex);
ex = "my name is kamran";
console.log(typeof ex);
ex = [1, 2, 3];
console.log(typeof ex);
ex = () => {};
console.log(typeof ex);
ex = { name: "kamran" };
console.log(typeof ex);
ex = undefined;
console.log(typeof ex);
ex = null;
console.log(typeof ex);
ex = new String(5);
console.log(typeof ex);
let ex1;
console.log(`type of ex1 is ${typeof ex1}`);
