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
