import React from "react";

const higherOrderComponent = (utilityFunction, LowerOrderComponent) => () =>
  (
    <div>
      <h1>Inside HOC</h1>
      <LowerOrderComponent utilityFunction={utilityFunction}/>
    </div>
  );

export default higherOrderComponent;
