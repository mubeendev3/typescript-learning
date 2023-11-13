/* -------------  What are the type annotations in TypeScript ------------- */

let apples: number = 5;
let firstName: string = "Mubeen";
let hasName: boolean = true;
let hasNull: null = null;
let hasUndefined: undefined = undefined;

/* --------------------------- Built in Objects -------------------------- */
let now: Date = new Date();

/* -------------------- Type annotations for an arrays ------------------- */
// array of strings
let colors: string[] = ["red", "blue", "green"];

// array of numbers
let myNumbers: number[] = [1, 2, 3, 4, 5];

// array of booleans
let myDecisions: boolean[] = [true, true, false];

/* ---------------------- Type annotations for classes ---------------------- */
class Car {}

let car: Car = new Car();

/* ----------------------------- Object literal ----------------------------- */

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

/* --------------------- Type annotations for Functions --------------------- */

const displayNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

/* ------------------------ When to use annotations? ------------------------ */
// 1) Function that returns any datatype
const json = '{"x": 10, "y": 20}';

// This is returning the type any
// const coordinates = JSON.parse(json); // returning the datatype 'any'

// To avoid the type any we have to add type annotations
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(typeof coordinates);

// 2) When we declare variable on one line and initialize it later
let colours: string[] = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < colours.length; i++) {
  if (colours[i] === "green") {
    foundWord = true;
  }
}

// 3) Variables whose type cannot be inferred correctly
let numbers: number[] = [-10, 20, -1, 5];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  numberAboveZero = numbers[i];
}
