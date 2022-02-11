import React from "react";

const LOC = ({ utilityFunction }) => {
  return (
    <>
      <h1>This is a LOC</h1>
      <button onClick={utilityFunction}>Perform Operation</button>
    </>
  );
};

export default LOC;
