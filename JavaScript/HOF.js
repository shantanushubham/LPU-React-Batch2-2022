const addTwoNumbers = (a, b) => a + b;

const higherOrderFunction = (a, lowerFunction) => {
  return lowerFunction(a, 20);
};

console.log(higherOrderFunction(10, addTwoNumbers));


// A function that calls another function that is passed as an argument, is a HOF
// The function that is passed as an argument is called a "lower-order function" or "callback"

// In HOC, a HOC function takes a component as an argument and returns another component;