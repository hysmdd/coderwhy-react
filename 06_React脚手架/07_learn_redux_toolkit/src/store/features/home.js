import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHomeMultiDataAction = createAsyncThunk(
  "fetch/homeMultiData",
  async () => {
    const res = await axios.get("http://codercba.com:8000/home/multidata");
    return res.data;
  }
);

const home = createSlice({
  name: "home",
  initialState: {
    banners: [],
    recommends: [],
  },
  reducers: {
    changeBanners(state, { payload }) {
      state.banners = payload;
    },
    changeRecommends(state, { payload }) {
      state.recommends = payload;
    },
  },
  // extraReducers: {
  //   [fetchHomeMultiDataAction.pending](state, action) {
  //     console.log("first");
  //   },
  //   [fetchHomeMultiDataAction.fulfilled](state, action) {},
  //   [fetchHomeMultiDataAction.rejected](state, action) {},
  // },
  extraReducers: (builder) => {
    builder.addCase(
      fetchHomeMultiDataAction.fulfilled,
      (state, { payload }) => {
        state.banners = payload.data.banner.list;
        state.recommends = payload.data.recommend.list;
      }
    );
  },
});

export const { changeBanners, changeRecommends } = home.actions;

export default home.reducer;
