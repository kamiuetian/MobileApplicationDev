function User(name) {
  this.name = name;
  this.display = () => {
    console.log("my name is ali");
  };
}
function Student(department) {
  this.department = department;
}
const user1 = new User("ali");
const std1 = new Student("CS");
std1.__proto__ = user1;
std1.display();
