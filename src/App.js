import React from "react";

import "./App.css";
import { Feed } from "./components/feed/Feed";
import { Header } from "./components/header/Header";
import { BottomNav } from "./components/bottomNav/BottomNav";

function App() {
  return (
    <div className="App">
      <Header />

      <div className=" sm:container md:mx-auto md:px-20 h-screen flex">
        <BottomNav />
        <Feed />
      </div>
    </div>
  );
}

export default App;
