import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { subNumber } from "../store/features/counter";

export class Profile extends PureComponent {
  subNumber(num) {
    this.props.subNumber(num);
  }
  render() {
    const { counter } = this.props.counter;
    return (
      <div>
        <h2>Profile Counter: {counter}</h2>
        <div className="buttons">
          <button onClick={(e) => this.subNumber(3)}>-3</button>
          <button onClick={(e) => this.subNumber(9)}>-9</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  subNumber(num) {
    dispatch(subNumber(num));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
