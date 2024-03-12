import React, { PureComponent } from "react";
import { AppWrapper, SectionWrapper } from "./style";
import Home from "./home";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      color: "#ff6700",
      size: "30px",
    };
  }
  render() {
    const { color, size } = this.state;
    return (
      <AppWrapper>
        <SectionWrapper color={color} size={size}>
          <h2 className="title">我是标题</h2>
          <p className="content">我是内容，哈哈哈</p>
          <button onClick={() => this.setState({ color: "skyblue" })}>
            修改颜色
          </button>
        </SectionWrapper>
        <Home />
        <div className="footer">
          <p>免责声明</p>
          <p>版权声明</p>
        </div>
      </AppWrapper>
    );
  }
}

export default App;
