import React, { PureComponent, createRef, forwardRef } from "react";

const HelloWorld = forwardRef(function (props, ref) {
  return (
    <div>
      <h2 ref={ref}>Hello World</h2>
      <span>111</span>
    </div>
  );
});

export class App extends PureComponent {
  constructor() {
    super();

    this.dexRef = createRef();
  }
  getComponent() {
    console.log(this.dexRef.current);
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
