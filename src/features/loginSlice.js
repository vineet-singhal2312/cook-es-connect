import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = JSON.parse(localStorage?.getItem("login")) || {
  token: null,
  isUserLoggedIn: false,
  name: null,
  profilePicture: null,
  currentUserId: null,
};

export const userLogin = createAsyncThunk(
  "login/userLogin",
  async ({ email, password }) => {
    console.log(email, password);
    const response = await axios.post(`http://localhost:8000/login`, {
      email,
      password,
    });
    console.log(response);
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
      };
    },
  },
  extraReducers: {
    [userLogin.fulfilled]: (state, action) => {
      console.log(action);
      state.token = action.payload.token;
      state.isUserLoggedIn = true;
      state.name = action.payload.userName;
      state.profilePicture = action.payload.profilePictureImageUrl;
      state.currentUserId = action.payload.id;
    },
  },
});
export const { userPressedLogout } = loginSlice.actions;

export default loginSlice.reducer;
