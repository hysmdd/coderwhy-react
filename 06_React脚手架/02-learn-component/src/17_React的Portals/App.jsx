import React, { PureComponent } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App H1</h1>
        {createPortal(<h2>App H2</h2>, document.querySelector("#dex"))}

        <Modal>
          <h2>浩瀚星空里，只剩你的背影</h2>
          <span>你从未离去</span>
        </Modal>
      </div>
    );
  }
}

export default App;
