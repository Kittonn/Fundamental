import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  return axios.get(url).then((res) => res.data);
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default postSlice;
