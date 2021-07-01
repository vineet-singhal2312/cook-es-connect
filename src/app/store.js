import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";
import darkModeReducer from "../features/darkModeSlice";
import postReducer from "../features/postsSlice";
import profileReducer from "../features/profileSlice";
import searchedUserProfileReducer from "../features/searchedProfileSlice";
import notificationReducer from "../features/notificationSlice";
import alertReducer from "../features/alertSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    dark: darkModeReducer,
    post: postReducer,
    profile: profileReducer,
    searchedUserProfile: searchedUserProfileReducer,
    notification: notificationReducer,
    alert: alertReducer,
  },
});
