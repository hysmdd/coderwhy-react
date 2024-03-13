import React, { PureComponent } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import { fetchHomeMultiDataAction } from "../store/actionCreators";
// import {
//   changeBannersAction,
//   changeRecommendsAction,
// } from "../store/actionCreators";

export class Category extends PureComponent {
  componentDidMount() {
    this.props.fetchHomeMultiData();
    // axios.get("http://codercba.com:8000/home/multidata").then((res) => {
    //   const banners = res.data.data.banner.list;
    //   const recommends = res.data.data.recommend.list;
    //   this.props.changeBanners(banners);
    //   this.props.changeRecommends(recommends);
    // });
  }
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h2>Category Page: {counter}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
  //   banners: state.banners,
  //   recommends: state.recommends,
});

const mapDispatchToProps = (dispatch) => ({
  //   changeBanners: (banners) => dispatch(changeBannersAction(banners)),
  //   changeRecommends: (recommends) =>
  //     dispatch(changeRecommendsAction(recommends)),
  fetchHomeMultiData() {
    dispatch(fetchHomeMultiDataAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
