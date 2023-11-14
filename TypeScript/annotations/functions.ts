/* ------------------------ Functions Using Fat Arrow ----------------------- */
const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

/* ----------------------------- Named Function ----------------------------- */
function divide(a: number, b: number): number {
  return a / b;
}

/* --------------------------- Anonymous Function --------------------------- */
const multiply = function (a: number, b: number): number {
  return a * b;
};

/* ------------------------- Void Type with Function ------------------------ */
const logger = (message: string): void => {
  console.log(message);
};

/* ------------------------ Never Type with Function ------------------------ */
const throwError = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: "sunny",
};

/* ------------------- Type annotations with destructuring ------------------ */
const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const displayWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

// const displayWeather = (todaysWeather: {
//   date: Date;
//   weather: string;
// }): void => {
//   console.log(todaysWeather.date);
//   console.log(todaysWeather.weather);
// };
displayWeather(todaysWeather);
