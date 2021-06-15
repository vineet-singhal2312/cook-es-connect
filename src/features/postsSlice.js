import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  error: null,
  posts: [],
};
export const addPost = createAsyncThunk(
  "posts/addPostToServer",
  async ({ token, postTitle, postCaption, imageUrl }) => {
    console.log(token, postTitle, postCaption);
    const response = await axios.post(
      `http://localhost:8000/posts`,
      {
        postTitle,
        postCaption,
        imageUrl,
      },
      { headers: { authorization: token } }
    );
    console.log(response);
    return response.data.results;
  }
);

export const fetchPosts = createAsyncThunk(
  "posts/fetchFromServer",
  async (token) => {
    const response = await axios.get(`http://localhost:8000/posts`, {
      headers: { authorization: token },
    });
    console.log(response.data.results);
    return response.data.results;
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},

  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      console.log(action);
      state.status = "fulfilled";
      state.posts = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [addPost.fulfilled]: (state, action) => {
      console.log(action);
      state.status = "fulfilled";
      state.posts = action.payload;
    },
  },
});

export const {} = postsSlice.actions;

export default postsSlice.reducer;
