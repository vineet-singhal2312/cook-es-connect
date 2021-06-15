import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import headerReducer from "../components/header/headerSlice";
import loginReducer from "../pages/login/loginSlice";
import darkModeReducer from "../features/darkMode/darkModeSlice";
import postReducer from "../features/postsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    header: headerReducer,
    login: loginReducer,
    dark: darkModeReducer,
    post: postReducer,
  },
});
