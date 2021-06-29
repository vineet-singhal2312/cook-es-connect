import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  notifications: [],
};

export const getNotifications = createAsyncThunk(
  "notification/getNotifications",
  async (token) => {
    const response = await axios.get(`http://localhost:8000/notifications`, {
      headers: { authorization: token },
    });
    return response.data.results;
  }
);
export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {},
  extraReducers: {
    [getNotifications.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.notifications = action.payload;
    },
    [getNotifications.pending]: (state) => {
      state.status = "loading";
    },
  },
});
export const {} = notificationSlice.actions;

export default notificationSlice.reducer;
