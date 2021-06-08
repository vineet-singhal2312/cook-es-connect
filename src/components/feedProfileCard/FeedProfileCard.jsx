import React from "react";
import Avatar from "@material-ui/core/Avatar";

export const FeedProfileCard = () => {
  return (
    <div className="fedd-profile-card  w-full ml-4 my-4 grid place-items-start pt-8 pl-16 relative hidden md:block">
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        id="feed-profile-avtar"
      />
      <h1 className="absolute top-52 left-12 text-2xl">Vineet singhal</h1>
    </div>
  );
};
