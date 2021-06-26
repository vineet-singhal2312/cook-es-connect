import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { useNavigate } from "react-router-dom";

export const SearchUserCard = ({ user, setIsSearch }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bottom-nav-user-card h-16 text-brand-secondaryText border border-gray-200 p-2 flex cursor-pointer hover:bg-gray-200  items-center"
      onClick={() => {
        navigate(`/users/${user._id}`);
        setIsSearch(false);
      }}
    >
      <Avatar
        alt="Remy Sharp"
        src={user.profilePictureImageUrl}
        id="feed-card-avtar"
      />
      <p className="ml-4">{user.userName}</p>
    </div>
  );
};
