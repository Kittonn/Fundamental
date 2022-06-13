import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import postSlice from "./postSlice";
const store = configureStore({
  reducer: { todo: todoSlice.reducer, post: postSlice.reducer },
});

export default store;
