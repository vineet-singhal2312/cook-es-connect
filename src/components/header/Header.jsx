import React from "react";
import { HeaderLeft } from "./HeaderLeft";
import { HeaderMiddle } from "./HeaderMiddle";
import { HeaderRight } from "./HeaderRight";

export const Header = () => {
  return (
    <div className="fixed w-full  h-12 bg-blue-400 px-20 flex">
      <HeaderLeft />
      <HeaderMiddle />
      <HeaderRight />
    </div>
  );
};
