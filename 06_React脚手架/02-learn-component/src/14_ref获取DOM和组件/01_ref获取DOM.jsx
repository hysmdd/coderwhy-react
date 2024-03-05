import React, { PureComponent, createRef } from "react";

export class App extends PureComponent {
  constructor() {
    super();

    this.titleRef = createRef();
    this.titleEl = null;
  }
  getNativeDOM() {
    // 方式1： 在React元素上绑定一个ref
    // console.log(this.refs.dex);
    // 方式2： 提前创建好ref对象：createRef()，将创建出来的对象绑定到元素上
    // console.log(this.titleRef.current);
    // 方式3:  传入一个回调函数
    console.log(this.titleEl);
  }
  render() {
    return (
      <div>
        <h2 ref="dex">终会与你同行</h2>
        <h2 ref={this.titleRef}>浩瀚星空里，只剩你的背影</h2>
        <h2 ref={(el) => (this.titleEl = el)}>日出的幻境，再次感觉到你</h2>
        <button onClick={() => this.getNativeDOM()}>获取DOM</button>
      </div>
    );
  }
}

export default App;
