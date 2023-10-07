"use strict";
// convert to more or less specific 
let a = 'hello';
let b = a; // less specific type
let c = a; // more specific
let d = 'world'; //cant do in react .tsx
let e = 'world'; //cant do in .tsx
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful, TS sees no problem but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string
10;
// The DOM
const img = document.querySelector('img'); // ! means non-null
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img'); // won't work in tsx files
img.src;
myImg.src;
