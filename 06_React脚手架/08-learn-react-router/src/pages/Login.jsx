import React, { PureComponent } from "react";
import { Navigate } from "react-router-dom";
import Home from "./Home";

export class Login extends PureComponent {
  constructor() {
    super();

    this.state = {
      isLogin: false,
    };
  }
  login() {
    this.setState({ isLogin: true });
  }
  render() {
    const { isLogin } = this.state;
    return (
      <div>
        <h1>Login</h1>
        {!isLogin ? (
          <button onClick={(e) => this.login()}>登录</button>
        ) : (
          <Navigate to="/home" />
        )}
      </div>
    );
  }
}

export default Login;
