"use strict";
let stringArr = ["one", "hey", "luka"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "John";
stringArr.push("hey");
guitars[0] = 1984;
guitars.unshift("Jim");
let test = [];
let bands = [];
bands.push("Van Halen");
// Tuple
let myTuple = ["dave", 12, true];
let mixed = ["John", 1, false];
myTuple[1] = 21;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Luka",
    prop2: true,
};
exampleObj.prop1 = "John";
let evh = {
    name: "Eddie",
    active: false,
    albums: [2001, 50, "Str"],
};
let jp = {
    active: true,
    albums: ["I", "QQ", "IV"],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return "Hello!";
};
console.log(greetGuitarist(jp));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 5] = "U";
    Grade[Grade["D"] = 6] = "D";
    Grade[Grade["C"] = 7] = "C";
    Grade[Grade["B"] = 8] = "B";
    Grade[Grade["A"] = 9] = "A";
})(Grade || (Grade = {}));
console.log(Grade.D);
