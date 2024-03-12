import React, { PureComponent } from "react";
import store from "../store";
import { addNumberAction } from "../store/actionCreators";

export class Home extends PureComponent {
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
  addNum(num) {
    // addNumberAction(num);
    store.dispatch(addNumberAction(num));
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>Home Counter: {counter}</h2>
        <div>
          <button onClick={(e) => this.addNum(1)}>+1</button>
          <button onClick={(e) => this.addNum(2)}>+2</button>
          <button onClick={(e) => this.addNum(3)}>+3</button>
          <button onClick={(e) => this.addNum(9)}>+9</button>
        </div>
      </div>
    );
  }
}

export default Home;
