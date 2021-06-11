import { createSlice, current } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage?.getItem("login")) || {
  token: "null",
  isUserLoggedIn: "false",
  name: "null",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
});

export default loginSlice.reducer;
