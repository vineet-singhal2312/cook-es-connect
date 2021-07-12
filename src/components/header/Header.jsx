import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";
import { SearchUserList } from "./searchUserList/SearchUserList";
import { fetchAllUsers } from "../../features/profileSlice";
import { fetchSearchedUsersList } from "../../features/searchedProfileSlice";
import { debouncedFn } from "../../utils/Debouncing";
export const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [userInputToBeSearch] = useState("");

  const { token } = useSelector((state) => {
    return state.login;
  });

  const dispatch = useDispatch();

  return (
    <div className="header shadow-1 z-50 fixed w-full  h-12 px-4 flex justify-between items-center bg-transparent text-brand-primaryText ">
      {isSearch && (
        <SearchUserList
          userInput={userInputToBeSearch}
          setIsSearch={setIsSearch}
        />
      )}
      <div className="grid place-items-start w-3/5 md:w-1/5 h90 cursor-pointer">
        <img
          src="/./images/company-logo.png"
          alt="img"
          className="header-logo-img h-full w-3/5 md:w-1/2"
        />
      </div>
      <div></div>
      <div className="header-left w-1/4 md:flex hidden float-right ">
        <input
          className="search-bar background-2 w-4/5 rounded-2xl mb-0 px-4 "
          onChange={(e) =>
            debouncedFn({
              searchedUserName: e.target.value,
              dispatch,
              fetchSearchedUsersList,
              token,
            })
          }
          onClick={() => {
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
      </div>
    </div>
  );
};
