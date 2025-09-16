// Explicit Types
// let username: string;

// username = "Monica Geller";

// // username = true;

// console.log("The user name is : ", username);

// // Implicit Types - TS Compiler infers the type from the supplied value
// let x = 199;

// // x = "Hello String";

// console.log(typeof x);

// // TYPES IN TYPESCRIPT
// - JavaScript Types : string, number, date, array, object, function
// - Various other types : tuple, any, unknown, null, undefined, union etc

let varNumber: number;
varNumber = 199;
console.log("Number : ", varNumber);

let varString: string;
varString = "Hello World";

let varDate: Date;
varDate = new Date("Dec 21, 1965");

let varArray: Array<number>;
varArray = [99, 97, 95, 98, 92];

let varObject: object;
varObject = { real: 99, imaginary: 12 };

let varTuple: [string, number];
varTuple = ["Monica Geller", 23];

let varFunction1: Function;
varFunction1 = () => {
  console.log("Do something");
};

let varFunction2: () => string;
varFunction2 = () => "Hello there";

let varAny: any;
varAny = "The String";
console.log("Length : ", varAny.length);
varAny = 199;
varAny = true;
varAny = [];
varAny = {};
varAny = () => {};

let varUnknown: unknown;
varUnknown = "Hello";
if (typeof varUnknown === "string") {
  console.log("Unknow Lenght : ", varUnknown.length);
}
varUnknown = 199;
varUnknown = true;

let varUnion: number | string;
varUnion = 23;
varUnion = "Twenty-Three";

// // CUSTOM TYPES
// THE TYPE KEYWORD
type MyCustomType = {
  name: string;
  age: number;
};

let varCustomType: MyCustomType;

varCustomType = {
  name: "Monica Geller",
  age: 23,
};

// CLASSES AS TYPES
class Foo {}

class Bar {}

let f: Foo;
f = new Foo();

let b: Bar;
b = new Bar();

// INTERFACE AS TYPE
interface ITodo {
  label: string;
  status: boolean;
}

let myList: Array<ITodo>;

let todo: ITodo = {
  label: "Shopping",
  status: true,
};

myList = [todo];

console.log("List of Todos : ", myList);
