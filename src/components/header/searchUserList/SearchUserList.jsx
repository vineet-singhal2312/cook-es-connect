import React from "react";
import { useSelector } from "react-redux";
import { SearchUserCard } from "./SearchUserCard";
import { AiFillCloseCircle } from "react-icons/ai";

export const SearchUserList = ({ userInput, setIsSearch }) => {
  const { allUsers } = useSelector((state) => state.profile);

  // const searchedUserArr = () => {
  const userNewArr = userInput
    ? allUsers.filter((user) =>
        user.userName.toLowerCase().includes(userInput.toLowerCase())
      )
    : allUsers;
  //   };

  return (
    <div className="search-user-list overflow-scroll z-50 absolute right-44 top-10 bg-white">
      {userNewArr.map((user) => (
        <SearchUserCard setIsSearch={setIsSearch} user={user} />
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
