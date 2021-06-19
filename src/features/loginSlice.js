import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = JSON.parse(localStorage?.getItem("login")) || {
  token: null,
  isUserLoggedIn: false,
  name: null,
  profilePicture: null,
  
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
    },
  },
});
export const { userPressedLogout } = loginSlice.actions;

export default loginSlice.reducer;
