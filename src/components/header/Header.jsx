import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import { HeaderLeft } from "./HeaderLeft";
import { HeaderMiddle } from "./HeaderMiddle";
import { HeaderRight } from "./HeaderRight";

import { useSelector, useDispatch } from "react-redux";
import { hamburgerButtonClicked } from "./headerSlice";
import { darkModeButtonPressed } from "../../features/darkMode/darkModeSlice";
import { SearchUserList } from "./searchUserList/SearchUserList";
import {
  fetchAllUsers,
  fetchProfileData,
  UserSearch,
} from "../../features/profileSlice";
export const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [userInputToBeSearch, setUserInputToBeSearch] = useState("");

  const { token } = useSelector((state) => state.login);
  const { header, dark } = useSelector((state) => {
    console.log({ state });
    return state;
  });
  // console.log(isSearch);

  const dispatch = useDispatch();

  return (
    <div className="header z-50 fixed w-full  h-12 px-4 flex justify-between items-center bg-transparent text-brand-primaryText ">
      {/* <HeaderLeft />
      <HeaderMiddle />
      <HeaderRight /> */}
      {isSearch && (
        <SearchUserList
          userInput={userInputToBeSearch}
          setIsSearch={setIsSearch}
        />
      )}
      <div className="grid place-items-center  md:hidden cursor-pointer">
        <GiHamburgerMenu onClick={() => dispatch(hamburgerButtonClicked())} />
      </div>
      <div></div>
      <div className="header-left w-1/4 md:flex hidden float-right ">
        <input
          className="search-bar w-3/5 rounded-2xl mb-0 px-4 "
          onChange={(e) => {
            setUserInputToBeSearch(e.target.value);
            // dispatch(User(e.target.value));
          }}
          onClick={() => {
            dispatch(fetchAllUsers(token));
            setIsSearch(!isSearch);
          }}
        />
        <div
          className="search-icon w-1/5 grid place-items-center cursor-pointer"
          onClick={() => {
            dispatch(fetchAllUsers(token));
            setIsSearch(!isSearch);
          }}
        >
          <AiOutlineSearch />
        </div>
        <div className="toggle-button r center w-1/5" id="toggle-button">
          <input
            type="checkbox"
            className="checkbox"
            checked={dark.isDarkModeEnable}
            onChange={() => dispatch(darkModeButtonPressed())}
          />
          <div className="knobs"></div>
          <div className="layer"></div>
        </div>
      </div>
    </div>
  );
};
