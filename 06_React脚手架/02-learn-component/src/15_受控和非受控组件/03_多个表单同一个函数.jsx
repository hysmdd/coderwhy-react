import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }
  handleSubmitClick(e) {
    e.preventDefault();
    // 获取所有的输入内容
    console.log("username: ", this.state.username);
    console.log("password: ", this.state.password);
  }
  //   handleUsernameChange(e) {
  //     this.setState({ username: e.target.value });
  //   }
  //   handlePasswordChange(e) {
  //     this.setState({ password: e.target.value });
  //   }
  handleInputChange(e) {
    // console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    const { username, password } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmitClick(e)}>
          <label htmlFor="username">
            用户：
            <input
              id="username"
              value={username}
              name="username"
              type="text"
              onChange={(e) => this.handleInputChange(e)}
            ></input>
          </label>
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <button type="submit">提交</button>
        </form>
      </div>
    );
  }
}

export default App;
