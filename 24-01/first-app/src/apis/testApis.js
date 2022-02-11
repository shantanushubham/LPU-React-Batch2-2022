export const testSumApi = (firstNumber, secondNumber) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(firstNumber + secondNumber), 3000);
  });
