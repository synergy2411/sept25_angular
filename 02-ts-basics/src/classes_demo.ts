class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return this.name + " - " + this.age;
  }
}

// let userOne = new Person("Monica Geller", 22);
// console.log("Person Details : " + userOne.getDetails());

class Student extends Person {
  private roll_no: string;
  static numberOfStudents: number = 0;

  constructor(name: string, age: number, roll_no: string) {
    super(name, age);
    this.roll_no = roll_no;
    Student.numberOfStudents += 1;
  }

  getDetails() {
    return `
            Student Roll Number : ${this.roll_no}
            Student Details : ${super.getDetails()}
        `;
  }
}

let joey = new Student("Joey", 23, "S001");
console.log(joey.getDetails());
console.log("Student number : ", Student.numberOfStudents);

// CONSTRUCTOR INJECTION

class Resource {
  constructor(private server_name: string, private location: string) {}

  getResourceDetails() {
    return this.server_name + " " + this.location;
  }
}

let resourceOne = new Resource("Server 01", "Pune");
console.log(resourceOne.getResourceDetails());

let resourceTwo = new Resource("Server 02", "Mumbai");
console.log(resourceTwo.getResourceDetails());

// Getter / Setter
// Method Overloading
// Interface implementation
