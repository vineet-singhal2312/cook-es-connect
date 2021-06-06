import React from "react";

import "./App.css";
import { Feed } from "./components/feed/Feed";
import { Header } from "./components/header/Header";
import { SideNav } from "./components/sideNav/SideNav";

function App() {
  return (
    <>
      <Header />

      <div className=" sm:container sm:mx-auto px-20 h-screen flex">
        <SideNav />
        <Feed />
      </div>
    </>
  );
}

export default App;
