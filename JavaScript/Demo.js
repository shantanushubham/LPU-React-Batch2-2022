let a = 10;

function testFunction(variable) {
  console.log(variable);
}

function demoFunction() {
  let b = a + 10;
  testFunction(b);
}

demoFunction();

//     demoFunction
//         |
//     testFunction
