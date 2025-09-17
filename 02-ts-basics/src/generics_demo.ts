// // GENERICS

// GENERICS WITH FUNCTION
function addAtBeginning<T>(item: T, list: Array<T>): Array<T> {
  return [item, ...list]; // SPREAD OPERATOR
}

let newList = addAtBeginning<number>(12, [14, 19, 23, 28]);

console.log("TYPE : ", typeof newList[0]);

const friends = addAtBeginning<string>("Monica", [
  "Joey",
  " Chandler",
  "Ross",
  "Rachel",
]);

console.log("TYPE : ", typeof friends[0]);

// GENERICS WITH CLASSES
class Stack<T> {
  private items: Array<T>;
  constructor() {
    this.items = [];
  }

  addItem(item: T): void {
    this.items.push(item);
  }

  removeItem(item: T): void {
    const position = this.items.findIndex((value) => value === item);
    if (position >= 0) {
      this.items.splice(position, 1);
    }
  }

  getItem(index: number): T {
    return this.items[index];
  }

  getAllItems(): Array<T> {
    return this.items;
  }
}

let numberStack = new Stack<number>();
numberStack.addItem(10);
numberStack.addItem(13);
numberStack.addItem(84);
numberStack.addItem(45);
console.log("Number Stack : ", numberStack.getAllItems());

numberStack.removeItem(13);

console.log("Number Stack After Item removed : ", numberStack.getAllItems());

// GENERICS WITH INTERFACES

interface IResource<T, K> {
  resourceName: T;
  resourceLocation: Array<K>;
}

let resoiurceOne: IResource<string, number> = {
  resourceName: "Server 01",
  resourceLocation: [74.19, 24.88],
};

console.log("Resource One : ", resoiurceOne);

// GENERICS CONSTRAINTS - 'extends'

function getLength<T extends { length: number }>(item: T) {
  return item.length;
}

interface IBox {
  width: number;
  height: number;
  length: number;
}

let box: IBox = {
  width: 4,
  height: 2,
  length: 8,
};

console.log("Length : ", getLength<IBox>(box));
