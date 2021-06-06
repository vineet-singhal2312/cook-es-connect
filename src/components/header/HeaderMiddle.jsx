import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineNotification } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export const HeaderMiddle = () => {
  return (
    <div className="w-1/2 md:block hidden  ">
      <div className="flex h-full">
        <div className="header-icon grid place-items-center  h-full w-1/4 text-4xl cursor-pointer">
          <AiOutlineHome />
        </div>

        <div className="header-icon grid place-items-center  h-full w-1/4 text-4xl cursor-pointer">
          <AiOutlineNotification />
        </div>
        <div className="header-icon grid place-items-center  h-full w-1/4 text-4xl cursor-pointer">
          <AiOutlineMessage />
        </div>
        <div className="header-icon grid place-items-center  h-full w-1/4 text-4xl cursor-pointer">
          <CgProfile />
        </div>
      </div>
    </div>
  );
};
