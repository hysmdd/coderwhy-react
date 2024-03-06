import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      isShow: false,
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
          unmountOnExit={true}
        >
          <h2>浩瀚星空里，只剩你的背影</h2>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
