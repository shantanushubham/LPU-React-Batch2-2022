// Promise is a class in JS
// Waiting when we make an API call or Database call

let addTwoNumbers = (a, b) => {
  return new Promise((fulfilled, notFulfilled) => {
    setTimeout(() => {
      let sum = a + b;
      console.log("Inside setTimeout");
      fulfilled(sum);
    }, 5000);
  });
};

let sum = 0;
addTwoNumbers(1, 2)
  .then((addedValue) => {
    console.log(`Promise fulfilled, and the sum is: ${addedValue}`);
    return addedValue + 10;
  })
  .then((returnedValue) => {
    console.log(`The returned value is ${returnedValue}`);
  });

let getAllUsersFromDatabase = () => {
  return new Promise((fulfilled, notFulfilled) => {
    // make API call
    let userList = [1, 2, 3, 4, 5];
    fulfilled(userList);
  });
};

getAllUsersFromDatabase().then((foundUsers) => {
  console.log(`Found Users are: ${foundUsers}`);
});

// NPM stands for Node Package Manager
