import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { isValidUser } from "../validator";

const SignUpForm = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  let handleInputChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!isValidUser({ ...state })) {
          setError("Invalid User");
          console.error("Invalid user");
        } else {
          console.info("Valid user");
        }
      }}
    >
      <Outlet />
      <input
        type={"text"}
        name={"firstName"}
        value={state.firstName}
        onChange={handleInputChange}
        placeholder={"First Name"}
      />
      <input
        type={"text"}
        name={"lastName"}
        value={state.lastName}
        onChange={handleInputChange}
        placeholder={"Last Name"}
      />
      <input
        type={"email"}
        name={"email"}
        value={state.email}
        onChange={handleInputChange}
        placeholder={"Email"}
      />
      <input
        type={"password"}
        name={"password"}
        value={state.password}
        onChange={handleInputChange}
        placeholder={"Password"}
      />
      <button type={"submit"}>Sign Up</button>
      {error && <span style={{ color: "red" }}>{error}</span>}
      <Outlet />
    </form>
  );
};

export default SignUpForm;

// [useState][][][][][][][]
//  state   tempState
