import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";

const store = configureStore({ reducer: { data: dataSlice.reducer } });

type RootState = ReturnType<typeof store.getState>;

export const selectData = (state: RootState) => state.data.counter;

export default store;
