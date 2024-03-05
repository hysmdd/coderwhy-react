import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      username: "dex",
    };
  }
  inputChange(e) {
    console.log("inputChange: ", e.target.value);
    this.setState({
      username: e.target.value,
    });
  }
  render() {
    const { username } = this.state;
    return (
      <div>
        {/* 受控组件 */}
        <input value={username} onChange={(e) => this.inputChange(e)}></input>
        {/* 非受控组件 */}
        <input type="text" />
        <h2>username: {username}</h2>
      </div>
    );
  }
}

export default App;
