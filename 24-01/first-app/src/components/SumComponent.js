import React, { Component } from "react";
import { testSumApi } from "../apis/testApis";

class SumComponent extends Component {
  state = {
    firstNumber: 0,
    secondNumber: 0,
    sum: 0,
  };

  componentDidMount() {
    console.log("Sum Component was mounted!");
    testSumApi(5, 6).then((sum) => this.setState({ ...this.state, sum }));
  }

  componentWillUnmount() {
    console.log("Sum Component is going to be unmounted!");
  }

  componentDidUpdate() {
    console.log("The component was updated!");
  }

  handleInputChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: Number(e.target.value) });
  };

  render() {
    return (
      <div>
        <input
          type={"number"}
          value={this.state.firstNumber}
          onChange={this.handleInputChange}
          name={"firstNumber"}
          placeholder={"Enter 1st Number"}
        />
        <input
          type={"number"}
          value={this.state.secondNumber}
          onChange={this.handleInputChange}
          name={"secondNumber"}
          placeholder={"Enter 2nd Number"}
        />
        <button
          onClick={() => {
            this.setState({
              ...this.state,
              sum: this.state.firstNumber + this.state.secondNumber,
            });
          }}
        >
          Add numbers!
        </button>
        <h3>The sum is: {this.state.sum}</h3>
      </div>
    );
  }
}

export default SumComponent;
