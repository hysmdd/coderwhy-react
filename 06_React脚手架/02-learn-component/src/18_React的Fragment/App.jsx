import React, { PureComponent, Fragment } from "react";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      sections: [
        { title: "哈哈哈", content: "我是内容，哈哈哈" },
        { title: "呵呵呵", content: "我是内容，呵呵呵" },
        { title: "嘿嘿嘿", content: "我是内容，嘿嘿嘿" },
        { title: "嘻嘻嘻", content: "我是内容，嘻嘻嘻" },
      ],
    };
  }
  render() {
    const { sections } = this.state;
    return (
      <Fragment>
        <h2>我是h2的标题</h2>
        <span>我是h2的内容，哈哈哈哈</span>

        <hr />

        {sections.map((item) => {
          return (
            <Fragment key={item.title}>
              <h2>{item.title}</h2>
              <span>{item.content}</span>
            </Fragment>
          );
        })}
      </Fragment>
    );
  }
}

export default App;
