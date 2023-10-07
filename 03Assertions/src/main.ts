type One = string;  // alias type
type Two = string | number;   // union type
type Three = "Hello";   //literal type

// convert to more or less specific 
let a: One = 'hello'
let b = a as Two  // less specific type
let c = a as Three // more specific

let d = <One>'world'  //cant do in react .tsx
let e = <string | number>'world' //cant do in .tsx

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if (c === 'add') return a + b
  return '' + a + b
}

let myVal: string = addOrConcat(2, 2, 'concat') as string 
// Be careful, TS sees no problem but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number 

// 10 as string
(10 as unknown) as string

// The DOM
const img = document.querySelector('img')! // ! means non-null
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img') // won't work in tsx files

img.src
myImg.src