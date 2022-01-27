import React from "react";
import Test from "./Test";

class App extends React.Component {
  state = {
    name: "Kamdev Kumar",
    age: 20,
    phoneNumber: "9638527410",
  };

  constructor(props) {
    super(props);
    this.setPhoneNumber = this.setPhoneNumber.bind(this);
  }

  setPhoneNumber(phoneNumber) {
    console.log(this);
    this.setState({ ...this.state, phoneNumber });
  }

  render() {
    return <Test user={this.state} setPhoneNumber={this.setPhoneNumber} />;
  }
}

export default App;

//            index
//              |
//             App
//              |
//             div
//      /     /   \    \
//    Test  Test   Test  Test

// [][{name: Devansh}][][][][][][][][][][]
//         state
