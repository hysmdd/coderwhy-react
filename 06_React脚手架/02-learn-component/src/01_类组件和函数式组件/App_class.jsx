import React from "react";
//1. 类组件
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "终会与你同行"
    }
  }

  render() {
    const {message} = this.state
    return (<div>
      <h2>{message}</h2>
    </div>)
  }
}

export default App;
