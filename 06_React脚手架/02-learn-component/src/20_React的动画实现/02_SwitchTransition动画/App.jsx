import React, { PureComponent } from "react";
import "./style.css";
import { CSSTransition, SwitchTransition } from "react-transition-group";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      isLogin: false,
    };
  }
  render() {
    const { isLogin } = this.state;
    return (
      <div className="container">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={isLogin ? "exit" : "login"}
            classNames="login"
            timeout={1000}
          >
            <button
              className={isLogin ? "quit" : ""}
              onClick={() => this.setState({ isLogin: !isLogin })}
            >
              {isLogin ? "注销" : "登录"}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  }
}

export default App;
