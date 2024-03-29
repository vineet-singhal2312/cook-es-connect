import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  allUsers: [],
  profileData: {},
  posts: [],
  isEditProfile: false,
};

export const fetchProfileData = createAsyncThunk(
  "profile/fetchProfileData",
  async (token) => {
    const response = await axios.get(
      // `http://localhost:8000/profile`,
      `https://encouraging-sheath-dress-bear.cyclic.app/profile`,

      {
        headers: { authorization: token },
      }
    );
    return response.data.result[0];
  }
);
export const fetchAllUsers = createAsyncThunk(
  "profile/fetchAllUsers",
  async (token) => {
    const response = await axios.get(
      // `http://localhost:8000/profile/users`,
      `https://encouraging-sheath-dress-bear.cyclic.app/profile/users`,

      {
        headers: { authorization: token },
      }
    );
    return response.data.results;
  }
);
export const getPostsForProfile = createAsyncThunk(
  "profile/getPostsForProfile",
  async (token) => {
    const response = await axios.get(
      // `http://localhost:8000/profile/posts`,
      `https://encouraging-sheath-dress-bear.cyclic.app/profile/posts`,

      {
        headers: { authorization: token },
      }
    );
    return response.data.results;
  }
);

export const addTimeLinePhoto = createAsyncThunk(
  "profile/addTimeLinePhoto",
  async ({ token, timelineImageUrl }) => {
    const response = await axios.post(
      // `http://localhost:8000/profile/timeline`,
      `https://encouraging-sheath-dress-bear.cyclic.app/profile/timeline`,

      {
        timelineImageUrl,
      },
      { headers: { authorization: token } }
    );
    return response.data.result[0];
  }
);

export const updateUserInfo = createAsyncThunk(
  "profile/updateUserInfo",
  async ({ token, updateToBeUserName }) => {
    const response = await axios.put(
      // `http://localhost:8000/profile`,
      `https://encouraging-sheath-dress-bear.cyclic.app/profile`,

      {
        updateToBeUserName,
      },
      { headers: { authorization: token } }
    );
    return response.data.result[0];
  }
);
export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    EditProfileButtonPressed: (state, action) => {
      return {
        ...state,
        isEditProfile: !state.isEditProfile,
      };
    },
  },

  extraReducers: {
    [fetchProfileData.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.profileData = action.payload;
    },
    [fetchProfileData.pending]: (state) => {
      state.status = "loading";
    },
    [fetchAllUsers.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allUsers = action.payload;
    },
    [fetchAllUsers.pending]: (state) => {
      state.status = "loading";
    },
    [getPostsForProfile.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.posts = action.payload;
    },
    [getPostsForProfile.pending]: (state) => {
      state.status = "loading";
    },
    [addTimeLinePhoto.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.profileData = action.payload;
    },
    [updateUserInfo.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.profileData = action.payload;
    },
  },
});

export const { EditProfileButtonPressed } = profileSlice.actions;

export default profileSlice.reducer;
