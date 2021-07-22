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
      `https://cook-es-connect.herokuapp.com/profile`,

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
      `https://cook-es-connect.herokuapp.com/profile/users`,

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
      `https://cook-es-connect.herokuapp.com/profile/posts`,

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
      `https://cook-es-connect.herokuapp.com/profile/timeline`,

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
      `https://cook-es-connect.herokuapp.com/profile`,

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
    setProfileStatusToIdle: (state) => {
      return {
        ...state,
        status: "idle",
      };
    },
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
    [addTimeLinePhoto.pending]: (state) => {
      state.status = "loading";
    },
    [updateUserInfo.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.profileData = action.payload;
    },
    [updateUserInfo.pending]: (state) => {
      state.status = "loading";
    },
  },
});

export const { EditProfileButtonPressed, setProfileStatusToIdle } =
  profileSlice.actions;

export default profileSlice.reducer;
