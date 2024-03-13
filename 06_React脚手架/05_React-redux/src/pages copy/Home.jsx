import React, { PureComponent } from "react";
import store from "../store";
import { addNumberAction } from "../store/actionCreators";
import { connect } from "react-redux";

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
    const { recommends } = this.props;
    return (
      <div>
        <h2>Home Counter: {counter}</h2>
        <div>
          <button onClick={(e) => this.addNum(1)}>+1</button>
          <button onClick={(e) => this.addNum(2)}>+2</button>
          <button onClick={(e) => this.addNum(3)}>+3</button>
          <button onClick={(e) => this.addNum(9)}>+9</button>
        </div>
        <h2>推荐图</h2>
        <div className="recommends">
          {recommends.map((item, index) => {
            return (
              <div key={item.title} className="recommend">
                <img alt={item.title} src={item.image} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recommends: state.recommends,
});

export default connect(mapStateToProps)(Home);
