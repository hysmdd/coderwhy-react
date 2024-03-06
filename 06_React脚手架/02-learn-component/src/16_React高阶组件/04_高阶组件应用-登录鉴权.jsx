import React, { PureComponent } from "react";
import Cart from "./pages/Cart";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      token: "",
    };
  }
  loginClick() {
    localStorage.setItem("token", "coderdex");

    this.setState({
      token: "coderdex",
    });
  }
  render() {
    return (
      <div>
        <div>
          App&emsp;
          <button onClick={(e) => this.loginClick()}>登录</button>
        </div>
        <Cart />
      </div>
    );
  }
}

export default App;
