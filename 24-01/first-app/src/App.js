import React from "react";
import Test from "./Test";

const App = ({ name }) => {
  let array = [name, name, name, "Pawan Pareek"];

  return (
    <div>
      {array.map((nameInArray, index) => {
        return <Test key={index} name={nameInArray} />;
      })}
    </div>
  );
};

export default App;

//            index
//              |
//             App
//              |
//             div
//      /     /   \    \
//    Test  Test   Test  Test
