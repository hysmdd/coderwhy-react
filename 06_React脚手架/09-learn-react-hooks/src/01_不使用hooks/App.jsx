import React, { PureComponent } from "react";
import "./style.css";

class HelloWorld extends PureComponent {
  constructor() {
    super();

    this.state = {
      message: "终会与你同行",
    };
  }
  changeText() {
    this.setState({
      message: "怀疑当初的执著，别退缩",
    });
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <h2>内容1：{message}</h2>
        <button onClick={(e) => this.changeText()}>修改文本</button>
      </div>
    );
  }
}

function HelloWorld2(props) {
  let message = "你从未离去";
  // 函数式组件存在的最大缺陷
  // 1. 组件不会被重新渲染
  // 2.
  function changeText() {
    message = "浩瀚星空里，只剩你的背影";
  }
  return (
    <div>
      <h2>内容2：{message}</h2>
      <button onClick={(e) => changeText()}>修改文本</button>
    </div>
  );
}

export class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloWorld />
        <hr />
        <HelloWorld2 />
      </div>
    );
  }
}

export default App;
