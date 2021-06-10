import React from "react";

import "./App.css";
import { Header } from "./components/header/Header";
import { BottomNav } from "./components/bottomNav/BottomNav";
import { Feed } from "./pages/feed/Feed";
import { Routes, Route } from "react-router-dom";
import { Profile } from "./pages/profile/Profile";
import { SignIn, SignUp } from "./pages/signup/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact={true} path="/" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<SignUp />} />
        {/* <Route path="/history" element={<Feed />} /> */}
        {/* <Route path="/liked" element={<Feed />} /> */}
        {/* <Route path="/message" element={<Feed />} /> */}
      </Routes>
    </div>
  );
}

export default App;
