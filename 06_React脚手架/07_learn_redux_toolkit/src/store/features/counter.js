import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 339,
  },
  reducers: {
    addNumber(state, { payload }) {
      state.counter += payload;
    },
    subNumber(state, { payload }) {
      state.counter -= payload;
    },
  },
});

export const { addNumber, subNumber } = counterSlice.actions;

export default counterSlice.reducer;
