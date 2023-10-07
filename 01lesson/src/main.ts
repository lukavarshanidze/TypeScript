let stringArr = ["one", "hey", "luka"];

let guitars = ["Strat", "Les Paul", 5150];

let mixedData = ["EVH", 1984, true];

stringArr[0] = "John";
stringArr.push("hey");

guitars[0] = 1984;
guitars.unshift("Jim");

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

// Tuple
let myTuple: [string, number, boolean] = ["dave", 12, true];

let mixed = ["John", 1, false];

myTuple[1] = 21;

// Objects
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Luka",
  prop2: true,
};

exampleObj.prop1 = "John";

interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [2001, 50, "Str"],
};

let jp: Guitarist = {
  active: true,
  albums: ["I", "QQ", "IV"],
};

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}`;
  }
  return "Hello!";
};

console.log(greetGuitarist(jp));

// Enums
enum Grade {
  U = 5,
  D,
  C,
  B,
  A,
}
console.log(Grade.D);
