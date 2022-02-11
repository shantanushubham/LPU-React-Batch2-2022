const addNumbers = (...args) => {
  let sum = 0;
  for (let el of args) {
    sum += el;
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(sum);
    }, 5000);
  });
};

let testFunction = async () => {
  try {
    let result = await addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

let ans = testFunction();
ans.then((result) => {
  console.log(result);
});
