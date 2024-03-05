import React, { PureComponent, createRef } from "react";

class HelloWorld extends PureComponent {
  test() {
    console.log("test----------------");
  }
  render() {
    return <h2>Hello World</h2>;
  }
}

export class App extends PureComponent {
  constructor() {
    super();

    this.dexRef = createRef();
  }
  getComponent() {
    console.log(this.dexRef.current);
    this.dexRef.current.test();
  }
  render() {
    return (
      <div>
        <HelloWorld ref={this.dexRef} />
        <button onClick={() => this.getComponent()}>获取组件示例</button>
      </div>
    );
  }
}

export default App;
