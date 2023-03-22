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
      // `http://localhost:8000/posts`,
      `https://encouraging-sheath-dress-bear.cyclic.app/posts`,

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
    const response = await axios.get(
      // `http://localhost:8000/posts`,
      `https://encouraging-sheath-dress-bear.cyclic.app/posts`,

      {
        headers: { authorization: token },
      }
    );
    return response.data.results;
  }
);

export const addReactionOnPost = createAsyncThunk(
  "posts/addReactionOnPost",
  async ({ token, postId, routeName }) => {
    const response = await axios.post(
      // `http://localhost:8000/posts/${routeName}`,
      `https://encouraging-sheath-dress-bear.cyclic.app/posts/${routeName}`,

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
      // `http://localhost:8000/posts/${routeName}`,
      `https://encouraging-sheath-dress-bear.cyclic.app/posts/${routeName}`,

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
      // `http://localhost:8000/posts/comments`,
      `https://encouraging-sheath-dress-bear.cyclic.app/posts/comments`,

      { postId, userComment },
      { headers: { authorization: token } }
    );
    return response.data.results;
  }
);
export const deleteCommentFromPost = createAsyncThunk(
  "posts/deleteCommentFromPost",
  async ({ token, postId, commentId }) => {
    const response = await axios.delete(
      // `http://localhost:8000/posts/comments`,
      `https://encouraging-sheath-dress-bear.cyclic.app/posts/comments`,

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
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.posts = action.payload;
    },
    [fetchPosts.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPosts.rejected]: (state) => {
      state.status = "fulfilled";
    },
    [addPost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.posts = action.payload;
    },
    [addPost.pending]: (state, action) => {
      state.status = "loading";
    },
    [addPost.rejected]: (state) => {
      state.status = "fulfilled";
    },
    [addReactionOnPost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.posts = action.payload;
    },
    [addReactionOnPost.pending]: (state, action) => {
      state.status = "loading";
    },
    [addReactionOnPost.rejected]: (state) => {
      state.status = "fulfilled";
    },
    [deleteReactionFromPost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.posts = action.payload;
    },
    [deleteReactionFromPost.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteReactionFromPost.rejected]: (state) => {
      state.status = "fulfilled";
    },
    [deleteCommentFromPost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.posts = action.payload;
    },
    [deleteCommentFromPost.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteCommentFromPost.rejected]: (state) => {
      state.status = "fulfilled";
    },
    [addCommentOnPost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.posts = action.payload;
    },
    [addCommentOnPost.pending]: (state, action) => {
      state.status = "loading";
    },
    [addCommentOnPost.rejected]: (state) => {
      state.status = "fulfilled";
    },
  },
});

export const { CommentBoxButtonPressed } = postsSlice.actions;

export default postsSlice.reducer;
