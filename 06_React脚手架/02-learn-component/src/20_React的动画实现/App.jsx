import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      isShow: true,
    };
  }
  render() {
    const { isShow } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ isShow: !isShow })}>
          隐藏/显示
        </button>
        {/* {isShow && <h2>浩瀚星空里，只剩你的背影</h2>} */}
        <CSSTransition
          in={isShow}
          classNames="dex"
          timeout={2000}
          appear={true}
          unmountOnExit={true}
          onEnter={(e) => console.log("开始进入动画")}
          onEntering={(e) => console.log("执行进入动画")}
          onEntered={(e) => console.log("结束进入动画")}
          onExit={(e) => console.log("开始离开动画")}
          onExiting={(e) => console.log("执行离开动画")}
          onExited={(e) => console.log("结束离开动画")}
        >
          <h2>浩瀚星空里，只剩你的背影</h2>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
