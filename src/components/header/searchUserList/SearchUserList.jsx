import React from "react";
import { useSelector } from "react-redux";
import { SearchUserCard } from "./SearchUserCard";
import { AiFillCloseCircle } from "react-icons/ai";

export const SearchUserList = ({ userInput, setIsSearch }) => {
  const { searchedUserList } = useSelector(
    (state) => state.searchedUserProfile
  );

  return (
    <div className="search-user-list scrollbar-hidden overflow-scroll z-50 absolute right-44 top-10 bg-white">
      {searchedUserList.map((user) => (
        <SearchUserCard key={user._id} setIsSearch={setIsSearch} user={user} />
      ))}
      <div
        className="absolute top-0 right-0 text-3xl cursor-pointer"
        onClick={() => setIsSearch(false)}
      >
        <AiFillCloseCircle />
      </div>
    </div>
  );
};
