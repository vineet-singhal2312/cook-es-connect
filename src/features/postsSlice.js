import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  error: null,
  posts: [],
  isCommentBox: false,
  currentPost: {},
};
export const addPost = createAsyncThunk(
  "posts/addPostToServer",
  async ({ token, postTitle, postCaption, imageUrl }) => {
    const response = await axios.post(
      `http://localhost:8000/posts`,
      {
        postTitle,
        postCaption,
        imageUrl,
      },
      { headers: { authorization: token } }
    );
    return response.data.results;
  }
);

export const fetchPosts = createAsyncThunk(
  "posts/fetchFromServer",
  async (token) => {
    const response = await axios.get(`http://localhost:8000/posts`, {
      headers: { authorization: token },
    });
    return response.data.results;
  }
);

export const addReactionOnPost = createAsyncThunk(
  "posts/addReactionOnPost",
  async ({ token, postId, routeName }) => {
    const response = await axios.post(
      `http://localhost:8000/posts/${routeName}`,
      {
        postId,
      },
      { headers: { authorization: token } }
    );
    return response.data.results;
  }
);

export const deleteReactionFromPost = createAsyncThunk(
  "posts/deleteReactionFromPost",
  async ({ token, postId, routeName }) => {
    const response = await axios.delete(
      `http://localhost:8000/posts/${routeName}`,
      {
        data: {
          postId,
        },
        headers: { authorization: token },
      }
    );
    return response.data.results;
  }
);

export const addCommentOnPost = createAsyncThunk(
  "posts/addCommentOnPost",
  async ({ token, postId, userComment }) => {
    const response = await axios.post(
      `http://localhost:8000/posts/comments`,
      { postId, userComment },
      { headers: { authorization: token } }
    );
    return response.data.results;
  }
);
export const deleteCommentFromPost = createAsyncThunk(
  "posts/deleteCommentFromPost",
  async ({ token, postId, commentId }) => {
    console.log(token, postId);
    const response = await axios.delete(
      `http://localhost:8000/posts/comments`,

      {
        data: {
          postId,
          commentId,
        },
        headers: { authorization: token },
      }
    );
    return response.data.results;
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    CommentBoxButtonPressed: (state, action) => {
      return {
        ...state,
        isCommentBox: !state.isCommentBox,
        currentPost: action.payload,
      };
    },
  },

  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.posts = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [addPost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.posts = action.payload;
    },
    [addReactionOnPost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.posts = action.payload;
    },
    [deleteReactionFromPost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.posts = action.payload;
    },
    [deleteReactionFromPost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.posts = action.payload;
    },
    [deleteCommentFromPost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.posts = action.payload;
    },
    [addCommentOnPost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.posts = action.payload;
    },
  },
});

export const { CommentBoxButtonPressed } = postsSlice.actions;

export default postsSlice.reducer;
