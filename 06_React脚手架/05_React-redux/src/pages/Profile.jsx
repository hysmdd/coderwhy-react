import React, { PureComponent } from "react";
import store from "../store";
import { subNumberAction } from "../store/actionCreators";

export class Profile extends PureComponent {
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
  subNum(num) {
    store.dispatch(subNumberAction(num));
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>Profile counter: {counter}</h2>
        <div>
          <button onClick={(e) => this.subNum(1)}>-1</button>
          <button onClick={(e) => this.subNum(2)}>-2</button>
          <button onClick={(e) => this.subNum(3)}>-3</button>
          <button onClick={(e) => this.subNum(9)}>-9</button>
        </div>
      </div>
    );
  }
}

export default Profile;
