import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumberAction, subNumberAction } from "../store/actionCreators";

export class About extends PureComponent {
  calcNumber(num, isAdd) {
    if (isAdd) {
      console.log("加：", num);
      this.props.addNumber(num);
    } else {
      console.log("减：", num);
      this.props.subNumber(num);
    }
  }
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h2>About Page: {counter}</h2>
        <div>
          <button onClick={(e) => this.calcNumber(3, true)}>+3</button>
          <button onClick={(e) => this.calcNumber(9, true)}>+9</button>
          <button onClick={(e) => this.calcNumber(3, false)}>-3</button>
          <button onClick={(e) => this.calcNumber(9, false)}>-9</button>
        </div>
      </div>
    );
  }
}

// connect()返回值是一个高阶函数
// function mapStateToProps(state) {
//   return {
//     counter: state.counter,
//   };
// }
const mapStateToProps = (state) => ({
  counter: state.counter,
});
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addNumber(num) {
//       dispatch(addNumberAction(num));
//     },
//     subNumber(num) {
//       dispatch(subNumberAction(num));
//     },
//   };
// };
const mapDispatchToProps = (dispatch) => ({
  addNumber: (num) => dispatch(addNumberAction(num)),
  subNumber: (num) => dispatch(subNumberAction(num)),
});
export default connect(mapStateToProps, mapDispatchToProps)(About);
