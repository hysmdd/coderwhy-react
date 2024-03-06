import React, { PureComponent } from "react";

// 定义一个高阶组件
function hoc(WrapperComponent) {
  // 定义类组件
  class NewComponent extends PureComponent {
    render() {
      return <WrapperComponent name="dex" />;
    }
  }

  return NewComponent;

  // 定义函数组件
  // function NewComponent2(props) {}
  // return NewComponent2;
}

class HelloWorld extends PureComponent {
  render() {
    return <h2>Hello World</h2>;
  }
}

const HelloWorldHOC = hoc(HelloWorld);

export class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloWorld />
      </div>
    );
  }
}

export default App;
