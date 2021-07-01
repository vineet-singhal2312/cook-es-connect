import React from "react";
import { useSelector } from "react-redux";

export const FeedProfileCard = () => {
  const { name, profilePicture } = useSelector((state) => state.login);
  return (
    <div className="fedd-profile-card background-0 min-h-100px w-1/4 rounded-lg  md:grid place-items-start pt-8 pl-16 relative hidden ">
      <img
        alt="fedd-profile-img"
        src={profilePicture}
        className="feed-avtar xl-avtar rounded-full absolute top-8 left-8  "
      />
      <h1 className="absolute top-60 left-12 text-2xl capitalize">{name}</h1>
    </div>
  );
};
