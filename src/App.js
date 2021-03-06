import React from "react";

import "./App.css";
import { Feed } from "./pages/feed/Feed";
import { Routes, Route } from "react-router-dom";
import { Profile } from "./pages/profile/Profile";
import { SignUp } from "./pages/signup/SignUp";
import { LogIn } from "./pages/login/LogIn";
import { useSelector } from "react-redux";
import Interceptor from "./middlewares/Interseptor";
import { SearchedProfile } from "./pages/searchedProfile/SearchedProfile";
import { Notifications } from "./pages/notification/Notifications";

function App() {
  const { isDarkModeEnable } = useSelector((state) => {
    return state.dark;
  });

  return (
    <div className={isDarkModeEnable ? "dark-theme" : "light-theme"}>
      <Interceptor />
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users/:searchedUserId" element={<SearchedProfile />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<LogIn />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </div>
  );
}

export default App;
