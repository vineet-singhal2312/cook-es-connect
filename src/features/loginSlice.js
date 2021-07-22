import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = JSON.parse(localStorage?.getItem("login")) || {
  token: null,
  isUserLoggedIn: false,
  name: null,
  profilePicture: null,
  currentUserId: null,
  status: "idle",
};
export const userLogin = createAsyncThunk(
  "login/userLogin",
  async ({ email, password, navigate }) => {
    const response = await axios.post(
      // `http://localhost:8000/login`,
      `https://cook-es-connect.herokuapp.com/login`,
      {
        email,
        password,
      }
    );
    console.log("hey---1");
    localStorage?.setItem(
      "login",
      JSON.stringify({
        isUserLoggedIn: true,
        token: response.data.token,
        name: response.data.userName,
        profilePicture: response.data.profilePictureImageUrl,
        currentUserId: response.data.id,
      })
    );
    navigate("/feed");

    return response.data;
  }
);
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userPressedLogout: (state) => {
      return {
        ...state,
        token: null,
        isUserLoggedIn: false,
        name: null,
        profilePicture: null,
        currentUserId: null,
        status: "idle",
      };
    },
  },
  extraReducers: {
    [userLogin.fulfilled]: (state, action) => {
      console.log("heyyy");
      state.status = "fulfilled";
      state.token = action.payload.token;
      state.isUserLoggedIn = true;
      state.name = action.payload.userName;
      state.profilePicture = action.payload.profilePictureImageUrl;
      state.currentUserId = action.payload.id;
    },
    [userLogin.pending]: (state, action) => {
      state.status = "loading";
    },
    [userLogin.rejected]: (state, action) => {
      state.status = "idle";
    },
  },
});
export const { userPressedLogout } = loginSlice.actions;

export default loginSlice.reducer;
