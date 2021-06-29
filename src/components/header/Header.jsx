import React, { useCallback, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import { useSelector, useDispatch } from "react-redux";
import { hamburgerButtonClicked } from "../../features/headerSlice";
import { darkModeButtonPressed } from "../../features/darkMode/darkModeSlice";
import { SearchUserList } from "./searchUserList/SearchUserList";
import { fetchAllUsers } from "../../features/profileSlice";
import { fetchSearchedUsersList } from "../../features/searchedProfileSlice";
export const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [userInputToBeSearch, setUserInputToBeSearch] = useState("");

  const { token } = useSelector((state) => state.login);
  const { dark } = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const searchHandle = (searchedUserName) => {
    dispatch(fetchSearchedUsersList({ token, searchedUserName }));
  };

  const debouncedFn = debounce(searchHandle);

  console.log(userInputToBeSearch);
  return (
    <div className="header shadow-1 z-50 fixed w-full  h-12 px-4 flex justify-between items-center bg-transparent text-brand-primaryText ">
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
          className="search-bar background-2 w-4/5 rounded-2xl mb-0 px-4 "
          onChange={(e) => debouncedFn(e.target.value)}
          onClick={() => {
            // dispatch(fetchAllUsers(token));
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
        {/* <div className="toggle-button r center w-1/5" id="toggle-button">
          <input
            type="checkbox"
            className="checkbox"
            checked={dark.isDarkModeEnable}
            onChange={() => dispatch(darkModeButtonPressed())}
          />
          <div className="knobs"></div>
          <div className="layer"></div>
        </div> */}
      </div>
    </div>
  );
};
