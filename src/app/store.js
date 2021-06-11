import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import headerReducer from "../components/header/headerSlice";
import loginReducer from "../pages/login/loginSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    header: headerReducer,
    login: loginReducer,
  },
});
