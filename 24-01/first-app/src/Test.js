import React from "react";
import "./Test.css";
import PropTypes from "prop-types";

const Test = ({ user, setPhoneNumber }) => {
  return (
    <div>
      <h2>This is {user.name}</h2>
      <h1>
        {user.name}'s Phone Number is: {user.phoneNumber}. Hit them up!
      </h1>
      <button
        onClick={(e) => {
          console.log("Button clicked");
          setPhoneNumber("123456789");
        }}
      >
        Change Number
      </button>
    </div>
  );
};

Test.propTypes = {
  user: PropTypes.object.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
};

export default Test;

// A   testVariable (not a state)  setTestVariable(val) {this.testVariable = val}
// |
// B   setTestVariable("Tanisha")
