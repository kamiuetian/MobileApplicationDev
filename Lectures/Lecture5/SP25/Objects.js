/**Objects in javascript */
const person = {};
//{"key":"value","key":"value"}
//const person = {"name":"John","age":30,"city":"New York",display:function(){console.log(this.name)}};

//adding properties to object
person.name = "John";
person.age = 30;
//console.log(person.name);
//console.log(person["age"]);
person.display = function () {
  console.log(this.name);
};
person.display();
//Object Constructor
function Person_Constructor(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.country = "Pakistan";
}
const p1 = new Person_Constructor("John");
//console.log(p1);
const p2 = new Person_Constructor("John", 30, "New York");
p1.address = "123 Main St";
//console.log(p1);
//console.log(p2);
const p3 = p1;
p3.name = "Peter";
console.log(p3.name == p1.name);

console.log(p2 === p1);
