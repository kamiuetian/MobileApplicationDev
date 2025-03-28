/**classes in Javascript */
class Person {
  //properties
  name;
  age;
  //private properties
  #address;
  // getter for private property
  get address() {
    return this.#address;
  }
  //setter for private property
  set address(value) {
    this.#address = value;
  }
  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log("Name: " + this.name + " Age: " + this.age);
  }
  //method
  display() {
    console.log("Name: " + this.name + " Age: " + this.age);
  }
  //static Property
  static country = "Pakistan";
  //static method
  static displayCountry() {
    console.log("Country: " + Person.country);
  }
}
//creating object of class
let person = new Person("John", 25);
person.display();
Person.#address = "New York"; //error
console.log(Person.country);
