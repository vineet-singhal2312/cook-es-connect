import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
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
    console.log(token);
    const response = await axios.get(`http://localhost:8000/profile`, {
      headers: { authorization: token },
    });
    console.log(response.data.result[0]);
    return response.data.result[0];
  }
);
export const fetchAllUsers = createAsyncThunk(
  "profile/fetchAllUsers",
  async (token) => {
    const response = await axios.get(`http://localhost:8000/profile/users`, {
      headers: { authorization: token },
    });
    console.log(response.data.results);
    return response.data.results;
  }
);
export const getPostsForProfile = createAsyncThunk(
  "profile/getPostsForProfile",
  async (token) => {
    console.log("getData");
    const response = await axios.get(`http://localhost:8000/profile/posts`, {
      headers: { authorization: token },
    });
    console.log(response.data.results);
    return response.data.results;
  }
);

export const addTimeLinePhoto = createAsyncThunk(
  "profile/addTimeLinePhoto",
  async ({ token, timelineImageUrl }) => {
    // console.log(token, postTitle, postCaption);
    const response = await axios.post(
      `http://localhost:8000/profile/timeline`,
      {
        timelineImageUrl,
      },
      { headers: { authorization: token } }
    );
    console.log(response);
    return response.data.result[0];
  }
);

export const updateUserInfo = createAsyncThunk(
  "profile/updateUserInfo",
  async ({ token, updateToBeUserName }) => {
    console.log(token, updateToBeUserName);
    const response = await axios.put(
      `http://localhost:8000/profile`,
      {
        updateToBeUserName,
      },
      { headers: { authorization: token } }
    );
    console.log(response);
    return response.data.result[0];
  }
);
export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    EditProfileButtonPressed: (state, action) => {
      // console.log(action);

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
