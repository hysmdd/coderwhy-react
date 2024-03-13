import * as actionTypes from "./constants";
import axios from "axios";

export const addNumberAction = (num) => ({
  type: actionTypes.ADD_NUMBER,
  num,
});

export const subNumberAction = (num) => ({
  type: actionTypes.SUB_NUMBER,
  num,
});

export const changeBannersAction = (banners) => ({
  type: actionTypes.CHANGE_BANNERS,
  banners,
});

export const changeRecommendsAction = (recommends) => ({
  type: actionTypes.CHANGE_RECOMMENDS,
  recommends,
});

export const fetchHomeMultiDataAction = () => {
  function foo(dispatch, getState) {
    console.log("foo function execution-----", getState());
    axios.get("http://codercba.com:8000/home/multidata").then((res) => {
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      dispatch(changeBannersAction(banners));
      dispatch(changeRecommendsAction(recommends));
    });
  }

  return foo;
};
