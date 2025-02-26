class User {
  constructor(department) {
    this.department = department;
  }
  display() {
    console.log(`my department is ${this.department}`);
  }
  display2() {}
}
class Student extends User {
  constructor(department, name, gpa) {
    super(department);
    this.name = name;
    this.gpa = gpa;
  }
}
class CSStudent extends Student {
  constructor(department, name, gpa) {
    super(department);
    this.name = name;
    this.gpa = gpa;
  }
}

const std1 = new Student("cs", "ali", "3");
std1.display();
const csstudent = new CSStudent();
csstudent.display2();
