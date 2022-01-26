import React, { Component } from "react";
import "./Test.css";

class Test extends Component {
  name = this.props.name ?? "Shantanu Shubham";

  render() {
    return <h1>This is {this.name}</h1>;
  }
}

// const Test = ({ name = "Shantanu Shubham" }) => {
//   return <h1>This is {name}</h1>;
// };

export default Test;

Component component = new Test();