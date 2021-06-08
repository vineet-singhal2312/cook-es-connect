import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import { HeaderLeft } from "./HeaderLeft";
import { HeaderMiddle } from "./HeaderMiddle";
import { HeaderRight } from "./HeaderRight";

import { useSelector, useDispatch } from "react-redux";
import { hamburgerButtonClicked } from "./headerSlice";

export const Header = () => {
  const header = useSelector((state) => {
    console.log({ state });
    return state.header;
  });
  console.log(header);
  const dispatch = useDispatch();
  return (
    <div className="header z-50 fixed w-full  h-12 px-4 flex justify-between items-center bg-transparent">
      {/* <HeaderLeft />
      <HeaderMiddle />
      <HeaderRight /> */}
      <div className="grid place-items-center  md:hidden cursor-pointer">
        <GiHamburgerMenu onClick={() => dispatch(hamburgerButtonClicked())} />
      </div>
      <div></div>
      <div className="w-1/4 md:flex hidden float-right ">
        <input className="search-bar w-4/5 rounded-2xl" />
        <div className="search-icon w-1/5 grid place-items-center">
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
};
