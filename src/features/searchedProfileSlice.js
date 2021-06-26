import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  searchedUserProfileData: {},
  searchedUserPosts: [],
};

export const fetchSearchedUserProfileData = createAsyncThunk(
  "searchedProfile/fetchSearchedUserProfileData",
  async ({ token, searchedUserId }) => {
    console.log(token, searchedUserId);
    const response = await axios.get(
      `http://localhost:8000/searched-profile/${searchedUserId}`,
      {
        headers: { authorization: token },
      }
    );
    console.log(response.data.result);
    return response.data.result[0];
  }
);

export const getPostsOfSearchedUser = createAsyncThunk(
  "searchedProfile/getPostsOfSearchedUser",
  async ({ token, searchedUserId }) => {
    console.log("getData");
    const response = await axios.get(
      `http://localhost:8000/searched-profile/posts/${searchedUserId}`,
      {
        headers: { authorization: token },
      }
    );
    console.log(response.data.results);
    return response.data.results;
  }
);

export const followProfile = createAsyncThunk(
  "searchedProfile/followProfile",
  async ({ token, searchedUserId }) => {
    console.log("getData", token, searchedUserId);
    const response = await axios.post(
      `http://localhost:8000/searched-profile/follow`,
      { searchedUserId },
      {
        headers: { authorization: token },
      }
    );
    console.log(response.data.result[0]);
    return response.data.result[0];
  }
);

export const UnFollowProfile = createAsyncThunk(
  "searchedProfile/UnFollowProfile",
  async ({ token, searchedUserId }) => {
    console.log("getData", token, searchedUserId);
    const response = await axios.delete(
      `http://localhost:8000/searched-profile/follow`,

      {
        data: { searchedUserId },
        headers: { authorization: token },
      }
    );
    console.log(response.data.result[0]);
    return response.data.result[0];
  }
);

export const searchedProfileSlice = createSlice({
  name: "searched-profile",
  initialState,
  reducers: {
    // EditProfileButtonPressed: (state, action) => {
    //   // console.log(action);
    //   return {
    //     ...state,
    //     isEditProfile: !state.isEditProfile,
    //   };
    // },
  },

  extraReducers: {
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

export const { EditProfileButtonPressed } = searchedProfileSlice.actions;

export default searchedProfileSlice.reducer;
