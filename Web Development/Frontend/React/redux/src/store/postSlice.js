import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts?_limit=5";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  return axios.get(url).then((res) => res.data);
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    status: null,
    text: {},
  },
  reducers: {
    newText(state, action) {
      state.text = state.list[Math.floor(Math.random() * state.list.length)];
    },
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
      state.text = state.list[Math.floor(Math.random() * state.list.length)];
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice;
