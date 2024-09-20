const students = [1.5, 2.1, 3.5, 1.5, 2.5, 3.7, 4.0];
/**loop {
  * if(gpa >=3)
  * {return 3.5}
 } */
/**RElative grading */
/**Average of gpa, sum of all gpas */
function mapper(x) {
  return x + 0.5;
}
function filterstudent(x) {
  return x >= 3;
}
const newGpa = students.map(mapper);
/** [0,1,2] */
//console.log(newGpa);
const newstudent = students.filter(filterstudent);
//[f, f, t, t, f, t];
console.log(newstudent);
/** */
function myreducer(x, y) {
  return x + y;
}
const sum = students.reduce();
/**[1.5, 2.1, 3.5, 1.5, 2.5, 3.7, 4.0]
 * (1.5,2.1)=3.6    (0,1.5)=1.5
 * (3.6,3.5)=7.1    (1.5,2.1)
 * {7.1,1.5}=
 */
console.log(sum);
/**ES6  Arrow function*/
function sumnumber(a, b) {
  return a + b;
}
/**arrow function */
let sumnumber_arrow = x => a + b;
sumnumber_arrow = 30;
