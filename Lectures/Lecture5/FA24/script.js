/**Objects  a collection of key value pairs*/
let obj = {
  mykey: "myvalue",
  1: "one",
  display: () => {
    console.log(this.mykey);
  },
};
obj.department = "CS";
console.log(obj.department);
obj.mykey;
obj["mykey"];
obj["1"];
/** ProtoType based classes*/
function Student(name, gpa) {
  this.name = name;
  this.gpa = gpa;
}

//std1.Prototype = Student;
Student.prototype.department = "CS";
const std1 = new Student("ALi", 3.2);
const std2 = new Student("Qasim", 3);

console.log(std1.department);
console.log(std2.department);
