import React from "react";

import "./App.css";
import { Header } from "./components/header/Header";
import { BottomNav } from "./components/bottomNav/BottomNav";
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
    // console.log({ state });
    return state.dark;
  });
  // console.log(isDarkModeEnable);

  return (
    <div className={isDarkModeEnable ? "dark-theme" : "light-theme"}>
      <Interceptor />
      <Routes>
        <Route exact={true} path="/" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users/:searchedUserId" element={<SearchedProfile />} />

        <Route path="/logout" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/notifications" element={<Notifications />} />

        {/* <Route path="/liked" element={<Feed />} /> */}
        {/* <Route path="/message" element={<Feed />} /> */}
      </Routes>
    </div>
  );
}

export default App;
