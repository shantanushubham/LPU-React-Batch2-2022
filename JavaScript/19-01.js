// Rest and Spread Operator
// Rest -> ...
// Spread -> ...
// They are used with JS Arrays and JS Objects

// Rest
// function addNumbers(...numbers) {
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// console.log(addNumbers(10, 20, 80, 44));
// console.log(addNumbers(10, 50));

// Spread is used with Arrays, Strings and with Objects
// Arrays

// let array = [5, 10, 15, 20, 25];
// let newArray = array;
// console.log(newArray);
let address = {
  city: "New York",
  state: "NY",
  country: "USA",
};
// Objects
let myObject = {
  name: "John",
  age: 24,
  address: address,
};

let myObject2 = JSON.parse(JSON.stringify(myObject));
myObject2.address.city = "Newark";
console.log(myObject2);
console.log(myObject);

// ['{address}']      [][]['{}']
//  myO.address            myO2
// myO2.address
