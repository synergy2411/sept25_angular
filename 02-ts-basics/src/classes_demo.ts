// class Person {
//   private name: string;
//   private age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   getDetails() {
//     return this.name + " - " + this.age;
//   }
// }

// let userOne = new Person("Monica Geller", 22);
// console.log("Person Details : " + userOne.getDetails());

// class Student extends Person {
//   private roll_no: string;
//   static numberOfStudents: number = 0;

//   constructor(name: string, age: number, roll_no: string) {
//     super(name, age);
//     this.roll_no = roll_no;
//     Student.numberOfStudents += 1;
//   }

//   getDetails() {
//     return `
//             Student Roll Number : ${this.roll_no}
//             Student Details : ${super.getDetails()}
//         `;
//   }
// }

// let joey = new Student("Joey", 23, "S001");
// console.log(joey.getDetails());
// console.log("Student number : ", Student.numberOfStudents);

// // CONSTRUCTOR INJECTION

// class Resource {
//   constructor(private server_name: string, private location: string) {}

//   getResourceDetails() {
//     return this.server_name + " " + this.location;
//   }
// }

// let resourceOne = new Resource("Server 01", "Pune");
// console.log(resourceOne.getResourceDetails());

// let resourceTwo = new Resource("Server 02", "Mumbai");
// console.log(resourceTwo.getResourceDetails());

// Getter / Setter
// Method Overloading
// Interface implementation

// // ABSTRACTION
abstract class Recipe {
  execute(): void {
    this.prepare();
    this.addIngredients();
    this.cleanUp();
  }

  abstract prepare(): void;
  abstract addIngredients(): void;
  abstract cleanUp(): void;
}

class Tea extends Recipe {
  prepare(): void {
    console.log("Boils the water");
  }
  addIngredients(): void {
    console.log("Add Tea leafs, sugar, and milk");
  }
  cleanUp(): void {
    console.log("Clean the dishes");
  }
}

class Coffee extends Recipe {
  prepare(): void {
    console.log("Boils the milk");
  }
  addIngredients(): void {
    console.log("Add Coffee beans, honey, and milk");
  }
  cleanUp(): void {
    console.log("Clean the machine");
  }
}

let tea = new Tea();
tea.execute();

let coffee = new Coffee();
coffee.execute();
