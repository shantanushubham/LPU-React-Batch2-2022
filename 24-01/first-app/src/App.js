import React, { Component } from "react";
import SumComponent from "./components/SumComponent";

class App extends Component {
  state = {
    isSumComponentVisible: false,
  };

  handleVisibilityChange = (e) => {
    this.setState({
      isSumComponentVisible: !this.state.isSumComponentVisible,
    });
  };

  render() {
    return (
      <>
        <h1>This is App Component</h1>
        <button onClick={this.handleVisibilityChange}>Toggle</button>
        <SumComponent />
      </>
    );
  }
}

export default App;
