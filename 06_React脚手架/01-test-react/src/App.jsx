import React from "react";
import HelloWorld from "./Components/HelloWorld";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "终会与你同行",
    };
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <h2>{message}</h2>
        <HelloWorld></HelloWorld>
      </div>
    );
  }
}

export default App