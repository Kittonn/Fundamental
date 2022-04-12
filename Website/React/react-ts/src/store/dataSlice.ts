import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface dataState {
  counter: number;
}

const initialState: dataState = {
  counter: 40,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    INCREATE(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },
    DECREATE(state, action: PayloadAction<number>) {
      state.counter -= action.payload;
    },
  },
});

export const { INCREATE, DECREATE } = dataSlice.actions;

export default dataSlice;
