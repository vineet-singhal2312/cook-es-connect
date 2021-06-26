import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  notifications: [],
};

export const getNotifications = createAsyncThunk(
  "notification/getNotifications",
  async (token) => {
    // console.log(email, password);
    const response = await axios.get(`http://localhost:8000/notifications`, {
      headers: { authorization: token },
    });
    console.log(response);

    return response.data.results;
  }
);
export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    // userPressedLogout: (state) => {
    //   return {
    //     ...state,
    //     token: null,
    //     isUserLoggedIn: false,
    //     name: null,
    //     profilePicture: null,
    //     currentUserId: null,
    //   };
    // },
  },
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
export const { userPressedLogout } = notificationSlice.actions;

export default notificationSlice.reducer;
