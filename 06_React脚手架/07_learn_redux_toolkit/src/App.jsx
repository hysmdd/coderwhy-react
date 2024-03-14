import React, { PureComponent } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { connect } from "react-redux";
import "./style.css";

export class App extends PureComponent {
  render() {
    const { counter } = this.props.counter;
    return (
      <div>
        <h2 className="title">App Counter: {counter}</h2>
        <div className="pages">
          <Home />
          <Profile />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

export default connect(mapStateToProps)(App);
