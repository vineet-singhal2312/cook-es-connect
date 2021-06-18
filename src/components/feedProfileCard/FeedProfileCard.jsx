import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";

export const FeedProfileCard = () => {
  const { name, profilePicture } = useSelector((state) => state.login);
  return (
    <div className="fedd-profile-card  w-full ml-4 my-4 grid place-items-start pt-8 pl-16 relative hidden md:block">
      <Avatar alt="Remy Sharp" src={profilePicture} id="feed-profile-avtar" />
      <h1 className="absolute top-60 left-12 text-2xl capitalize">{name}</h1>
    </div>
  );
};
