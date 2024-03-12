import React, { PureComponent } from "react";
import "./style.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import store from "./store";
import About from "./pages/About";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      counter: store.getState().counter,
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState();
      this.setState({
        counter: state.counter,
      });
    });
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2 className="header">App Counter: {counter}</h2>
        <div className="pages">
          <Home />
          <Profile />
          <About />
        </div>
      </div>
    );
  }
}

export default App;
