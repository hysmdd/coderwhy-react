import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumber } from "../store/features/counter";

export class Home extends PureComponent {
  addNumber(num) {
    this.props.addNumber(num);
  }
  render() {
    const { counter } = this.props.counter;
    return (
      <div>
        <h2>Home Counter: {counter}</h2>
        <div className="buttons">
          <button onClick={(e) => this.addNumber(3)}>+3</button>
          <button onClick={(e) => this.addNumber(9)}>+9</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
