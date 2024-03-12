import React, { PureComponent } from "react";
import ClassNames from "classnames";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      isbbb: true,
      isccc: true,
    };
  }
  render() {
    const { isbbb, isccc } = this.state;

    const classList = ["aaa"];
    if (isbbb) classList.push("bbb");
    if (isccc) classList.push("ccc");
    const classname = classList.join(" ");

    return (
      <div>
        <h2 className={`aaa ${isbbb ? "bbb" : ""} ${isccc ? "ccc" : ""}`}>
          终会与你同行
        </h2>
        <h2 className={classname}>浩瀚星空里，只剩你的背影</h2>
        <h2 className={ClassNames("aaa", { bbb: isbbb, ccc: isccc })}>
          日出的幻境，再次感觉到你
        </h2>
        <h2 className={ClassNames(["aaa", { bbb: isbbb, ccc: isccc }])}>
          我不再迷茫，思念是唯一的行囊
        </h2>
      </div>
    );
  }
}

export default App;
