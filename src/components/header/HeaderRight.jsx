import React from "react";
// import { CgProfile } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export const HeaderRight = () => {
  return (
    <div className="lg:w-1/4 w-1/2">
      <div className="flex w-1/3 h-full text-xs float-right">
        {/* <CgProfile className="header-icon grid place-items-center  h-full w-1/4 " /> */}
        {/* <AiOutlineNotification className="header-icon grid place-items-center  h-full w-1/4" /> */}
        {/* <AiOutlineMessage className="header- icon grid place-items-center  h-full w-1/4" /> */}

        <div className="header-icon grid place-items-center text-2xl  h-full w-1/2 cursor-pointer">
          <AiOutlineSearch />
        </div>
        <div className="header-icon grid place-items-center text-2xl   h-full w-1/2 cursor-pointer">
          <AiOutlineLogout />
        </div>
      </div>
    </div>
  );
};
