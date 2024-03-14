import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { subNumber } from "../store/features/counter";

export class Profile extends PureComponent {
  subNumber(num) {
    this.props.subNumber(num);
  }
  render() {
    const { counter, banners, recommends } = this.props;
    return (
      <div>
        <h2>Profile Counter: {counter}</h2>
        <div className="buttons">
          <button onClick={(e) => this.subNumber(3)}>-3</button>
          <button onClick={(e) => this.subNumber(9)}>-9</button>
        </div>
        <div className="banner">
          <h2>轮播图展示</h2>
          <div className="banners">
            {banners.map((item, index) => {
              return (
                <div key={item.title} className="banner">
                  <img src={item.image} alt={item.title} />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2>推荐图展示</h2>
          <div className="recommends">
            {recommends.map((item, index) => {
              return (
                <div key={item.title} className="recommend">
                  <img src={item.image} alt={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners,
  recommends: state.home.recommends,
});

const mapDispatchToProps = (dispatch) => ({
  subNumber(num) {
    dispatch(subNumber(num));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
