import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push({ id: new Date().valueOf(), text: action.payload });
    },
    delete(state, action) {
      return state.filter((itm) => itm.id !== action.payload);
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
