function Person_Constructor(name, age) {
  this.name = name;
  this.age = age;
  this.fullname = function () {
    return this.name;
  };
}
const p1 = new Person_Constructor("John", 30);
const p2 = new Person_Constructor("John", 30);
console.log(p1.fullname());
console.log(p1.age);
//p1.address = "123 Main St";
//Person_Constructor.prototype.country = "Pakistan";
//p1.country = "USA";
//p2.__proto__.country = "USA";
//console.log(p1);
