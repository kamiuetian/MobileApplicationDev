class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log("Name: " + this.name + " Age: " + this.age);
  }
}
//inheritance
//Employee
class Employee extends Person {
  constructor(name, age, department) {
    super(name, age);
    this.department = department;
  }
}
//Student
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  display() {
    console.log(
      "Name: " + this.name + " Age: " + this.age + " Grade: " + this.grade
    );
  }
}
//creating object of class
class CSEmployee extends Employee {
  constructor(name, age, department, salary) {
    super(name, age, department);
    this.salary = salary;
  }
}
let employee = new Employee("John", 25, "CS");
//employee.display();
let csemployee = new CSEmployee("John", 25, "CS", 50000);
console.log(csemployee);
