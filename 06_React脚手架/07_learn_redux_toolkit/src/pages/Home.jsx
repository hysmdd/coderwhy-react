import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumber } from "../store/features/counter";
import {
  changeBanners,
  changeRecommends,
  fetchHomeMultiDataAction,
} from "../store/features/home";
// import axios from "axios";

export class Home extends PureComponent {
  addNumber(num) {
    this.props.addNumber(num);
  }
  componentDidMount() {
    // axios.get("http://codercba.com:8000/home/multidata").then((res) => {
    //   const banners = res.data.data.banner.list;
    //   const recommends = res.data.data.recommend.list;
    //   this.props.changeBanners(banners);
    //   this.props.changeRecommends(recommends);
    // });
    this.props.fetchHomeMultiData();
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
  // changeBanners(banners) {
  //   dispatch(changeBanners(banners));
  // },
  // changeRecommends(recommends) {
  //   dispatch(changeRecommends(recommends));
  // },
  fetchHomeMultiData() {
    dispatch(fetchHomeMultiDataAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
