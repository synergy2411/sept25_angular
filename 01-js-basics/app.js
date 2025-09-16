// let x = 10;
// console.log(typeof x); // "number"

// x = "Hello";
// console.log(typeof x); // "string"

// x = true;
// console.log(typeof x); // "boolean"

// x = { name: "Alice" };
// console.log(typeof x); // "object"

// x = null;
// console.log(typeof x); // "object" (this is a known quirk in JavaScript)

// console.log("Starting the application...");

// setTimeout(function () {
//   console.log("This message is displayed after 2 seconds.");
// }, 2000);

// console.log("Application is running.");

// console.log("Application has finished.");

// OUTPUT :

// ARROW Functions

// var addition = (x, y) => x + y;

// var addition = (x, y) => {
//   console.log("X : ", x);
//   console.log("Y : ", y);
//   return x + y;
// };

// var result = addition(2, 4);

// console.log("Result : ", result);

// var shout = (username) => username.toUpperCase();

// var user_name = shout("tim cook");

// console.log("User name : ", user_name);

// DONT HAVE 'this' KEYWORD

// var user = {
//   firstName: "John",
//   lastName: "Doe",
//   getFullName: function () {
//     var that = this;
//     return function () {
//       return that.firstName + " " + that.lastName;
//     };
//   },
// };

// var user = {
//   firstName: "John",
//   lastName: "Doe",
//   getFullName: function () {
//     return () => this.firstName + " " + this.lastName;
//   },
// };

// var fullName = user.getFullName();

// console.log("Full Name : ", fullName());

// DONT HAVE 'arguments' KEYWORD

// function square() {
//   console.log(arguments);
//   var resultArray = [];
//   for (let arg of arguments) {
//     resultArray.push(arg ** 2);
//   }
//   return resultArray;
// }

// var result = square(2, 3, 4, 5);
// console.log("Result : ", result);

// var demoFn = () => console.log("Arguments in Arrow Function : ", arguments);

// demoFn();

// // CANT CALL WITH 'new' OPERATOR

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// var userOne = new Person("monica", 22);
// var userTwo = new Person("ross", 24);

// console.log(userOne);
// console.log(userTwo);

// var Student = (name, age) => (this.name = name);

// var userThree = new Student("Joey", 22);

// console.log(userThree);

// // BLOCK SCOPING - let / const

// function demoBlockScope(arr) {
//   if (arr.length > 2) {
//     let LOAD = "LOADING...";
//     console.log(FLASH);
//   } else {
//     let FLASH = "FLASHING...";
//   }
// }

// demoBlockScope([1, 2, 3, 4]); // undefined

// const username = "Monica Geller";

// username = "Ross Geller";

// const user = {
//   name: "Monica",
// };

// user.name = "Ross";

// user = {
//   name: "Rachel",
// };

// console.log("User name : ", user.name);

// const friends = ["Monica", "Ross", "Rachel"];

// friends.push("Joey"); // No Error

// // Error - Changing the reference
// // friends = ["Monica", "Ross", "Rachel", "Joey"];

// console.log(friends.length); // ?

// // REST Operator

// function demoRest(email, age, ...args) {
//   console.log("Length : ", args.length);
//   console.log(args[0]); // ?
// }

// demoRest("monica@test", 22, true);
// demoRest("monica@test", 22);
// demoRest("monica@test");

// function sum(...numbers) {
//   let total = 0;
//   for (let num of numbers) {
//     total += num;
//   }
//   return total;
// }

// console.log("Sum : ", sum(2, 3));
// console.log("Sum : ", sum(2, 3, 4));
// console.log("Sum : ", sum(2, 3, 4, 4, 5, 6, 8));

// // SPREAD (...)

// let userOne = {
//   name: "Monica",
//   company: "Apple Inc",
// };

// let userTwo = {
//   ...userOne, // {name, company}
//   name: "Ross",
// };

// console.log(userOne);
// console.log(userTwo);

// let marks = [98, 99, 96, 91, 98];   //

// let moreMarks = [99, 89, 79, ...marks];

// console.log(moreMarks[3]); // ?
// console.log(moreMarks); // ?

// // DESTRUCTURING

// let employeeOne = {
//   name: "Monica Geller",
//   age: 22,
//   city: "Pune",
// };

// let employeeTwo = {
//   name: "Ross Geller",
//   age: 24,
//   city: "Bengalore",
// };

// let { age: e1_age, name: e1_name, city: e1_city } = employeeOne;
// let { name: e2_name, age: e2_age, city: e2_city } = employeeTwo;

// console.log("Name : ", e1_name);
// console.log("Age : ", e1_age);
// console.log("City : ", e1_city);

// console.log("Name : ", e2_name);
// console.log("Age : ", e2_age);
// console.log("City : ", e2_city);

// let friends = ["Monica", "Rachel", "Chandler", "Ross"];

// let [, , f3, f4] = friends;

// console.log(f3); // "Chandler"

// let student = {
//   rollNo: "S001",
//   name: "Joey",
//   courses: ["Angular", "Spring", "Docker"],
//   address: {
//     city: "Pune",
//     street: "201, Main Road Wakad",
//   },
// };

// let {
//   rollNo,
//   name,
//   courses: [c1, c2, c3],
//   address: { city, street },
// } = student;

// console.log("Student Details : ");
// console.log(name + " " + rollNo);
// console.log("Enrolled in ", c1, c2, c3);
// console.log("Address : ", street, city);

// let employees = [
//   { email: "monica@test", age: 22 },
//   { email: "ross@test", age: 23 },
//   { email: "rachel@test", age: 24 },
// ];

// let [
//   { email: e1_email, age: e1_age },
//   { email: e2_email, age: e2_age },
//   { email: e3_email, age: e3_age },
// ] = employees;

// console.log("First Employee Record : ", e1_email, e1_age);

// // Template Literals (Back Tick) ` ` | " " | ' '
// // - Embed the variables (+)
// // - Multiline strings (\n)

// let username = "Monica Geller";
// let age = 22;

// let greet = "Hello from " + username + "\n" + "I'm " + age + " years old!";

// console.log(greet);

// betterGreet = `
// Better Hello from ${username},
// I'm ${age} years old!
// `;

// console.log(betterGreet);

// // Default Parameter

// function demoDefaultParameter(marks = []) {
//   if (marks.length > 5) {
//     console.log("Marks : ", marks);
//   } else {
//     console.log("Add More...");
//   }
// }

// demoDefaultParameter([99, 97, 98, 99, 93, 98]);

// demoDefaultParameter();

// // SYNC VS ASYNC CODE

// window.onload = function () {
//   const h1Element = document.querySelector("#heading");
//   h1Element.textContent = "This is changed content";
//   setTimeout(() => {
//     alert("Who's this?");
//   }, 1000);
//   h1Element.style.color = "blue";
// };

// // CALLBACK
// // Error First, Callback Last

// Callback
function greet(err, message) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(message.toUpperCase());
}

// Higher Order Function (HoF)
function demoCallback(lang, cb) {
  if (lang == "en") {
    cb(null, "Hello There");
  } else if (lang == "de") {
    cb(null, "Hola");
  } else {
    cb(new Error("Please specify the language either 'en' or 'de'."));
  }
}

demoCallback("de", greet);

let matrix = [
  [2, 4],
  [4, 6],
  [6, 8],
];

let [first, second, third] = matrix;

let [f1, f2] = first;
let [s1, s2] = second;
let [t1, t2] = third;

console.log(f1, s1, t1);

let [[x1, y1], [x2, y2], [x3, y3]] = matrix;

console.log(y1, y2, y3);
