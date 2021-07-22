import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  searchedUserProfileData: {},
  searchedUserPosts: [],
  searchedUserList: [],
};

export const fetchSearchedUsersList = createAsyncThunk(
  "searchedProfile/fetchSearchedUsersList",
  async ({ token, searchedUserName }) => {
    const response = await axios.get(
      // `http://localhost:8000/searched-profile/users/${searchedUserName}`,
      `https://cook-es-connect.herokuapp.com/searched-profile/users/${searchedUserName}`,

      {
        headers: { authorization: token },
      }
    );
    return response.data.results;
  }
);

export const fetchSearchedUserProfileData = createAsyncThunk(
  "searchedProfile/fetchSearchedUserProfileData",
  async ({ token, searchedUserId }) => {
    const response = await axios.get(
      // `http://localhost:8000/searched-profile/${searchedUserId}`,
      `https://cook-es-connect.herokuapp.com/searched-profile/${searchedUserId}`,

      {
        headers: { authorization: token },
      }
    );
    return response.data.result[0];
  }
);

export const getPostsOfSearchedUser = createAsyncThunk(
  "searchedProfile/getPostsOfSearchedUser",
  async ({ token, searchedUserId }) => {
    const response = await axios.get(
      // `http://localhost:8000/searched-profile/posts/${searchedUserId}`,

      `https://cook-es-connect.herokuapp.com/searched-profile/posts/${searchedUserId}`,

      {
        headers: { authorization: token },
      }
    );
    return response.data.results;
  }
);

export const followProfile = createAsyncThunk(
  "searchedProfile/followProfile",
  async ({ token, searchedUserId }) => {
    const response = await axios.post(
      // `http://localhost:8000/searched-profile/follow`,
      `https://cook-es-connect.herokuapp.com/searched-profile/follow`,

      { searchedUserId },
      {
        headers: { authorization: token },
      }
    );
    return response.data.result[0];
  }
);

export const UnFollowProfile = createAsyncThunk(
  "searchedProfile/UnFollowProfile",
  async ({ token, searchedUserId }) => {
    const response = await axios.delete(
      // `http://localhost:8000/searched-profile/follow`,
      `https://cook-es-connect.herokuapp.com/searched-profile/follow`,

      {
        data: { searchedUserId },
        headers: { authorization: token },
      }
    );
    return response.data.result[0];
  }
);

export const searchedProfileSlice = createSlice({
  name: "searched-profile",
  initialState,
  reducers: {
    setSearchedProfileStatusToIdle: (state) => {
      return {
        ...state,
        status: "idle",
      };
    },
  },

  extraReducers: {
    [fetchSearchedUsersList.fulfilled]: (state, action) => {
      state.searchedUserList = action.payload;
    },

    [fetchSearchedUserProfileData.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.searchedUserProfileData = action.payload;
    },
    [fetchSearchedUserProfileData.pending]: (state) => {
      state.status = "loading";
    },
    [followProfile.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.searchedUserProfileData = action.payload;
    },
    [followProfile.pending]: (state) => {
      state.status = "loading";
    },
    [followProfile.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.searchedUserProfileData = action.payload;
    },
    [followProfile.pending]: (state) => {
      state.status = "loading";
    },
    [getPostsOfSearchedUser.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.searchedUserPosts = action.payload;
    },
    [getPostsOfSearchedUser.pending]: (state) => {
      state.status = "loading";
    },
  },
});
export const { setSearchedProfileStatusToIdle } = searchedProfileSlice.actions;
export default searchedProfileSlice.reducer;
