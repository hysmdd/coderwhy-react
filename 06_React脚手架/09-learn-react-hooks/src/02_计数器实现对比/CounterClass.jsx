import React, { PureComponent } from "react";

export class CounterClass extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 339,
    };
  }
  increase() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  decrease() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={(e) => this.increase()}>+1</button>
        <button onClick={(e) => this.decrease()}>-1</button>
      </div>
    );
  }
}

export default CounterClass;
