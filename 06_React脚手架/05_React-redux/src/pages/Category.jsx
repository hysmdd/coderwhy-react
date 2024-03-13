import React, { PureComponent } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  changeBannersAction,
  changeRecommendsAction,
} from "../store/actionCreators";

export class Category extends PureComponent {
  componentDidMount() {
    axios.get("http://codercba.com:8000/home/multidata").then((res) => {
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      this.props.changeBanners(banners);
      this.props.changeRecommends(recommends);
    });
  }
  render() {
    return (
      <div>
        <h2>Category Page</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  banners: state.banners,
  recommends: state.recommends,
});

const mapDispatchToProps = (dispatch) => ({
  changeBanners: (banners) => {
    dispatch(changeBannersAction(banners));
  },
  changeRecommends: (recommends) =>
    dispatch(changeRecommendsAction(recommends)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
