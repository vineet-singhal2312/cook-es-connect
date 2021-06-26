import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import headerReducer from "../components/header/headerSlice";
import loginReducer from "../features/loginSlice";
import darkModeReducer from "../features/darkMode/darkModeSlice";
import postReducer from "../features/postsSlice";
import profileReducer from "../features/profileSlice";
import searchedUserProfileReducer from "../features/searchedProfileSlice";
import notificationReducer from "../features/notificationSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    header: headerReducer,
    login: loginReducer,
    dark: darkModeReducer,
    post: postReducer,
    profile: profileReducer,
    searchedUserProfile: searchedUserProfileReducer,
    notification: notificationReducer,
  },
});
