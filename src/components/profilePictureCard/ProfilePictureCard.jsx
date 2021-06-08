import React from "react";
import Avatar from "@material-ui/core/Avatar";

export const ProfilePictureCard = () => {
  return (
    <>
      <div className="profile-picture-card relative flex flex-col justify-between">
        <img
          src="https://i.ytimg.com/vi/tcmlz6EGZgM/maxresdefault.jpg"
          alt="Girl in a jacket"
          className="w-full h-3/5 rounded-t"
        />
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          id="profile-avtar"
        />
        <div className="h-1/5 p-4 flex items-center justify-between">
          <h1 className="user-name-profile text-2xl w-1/4">Vineet singhal</h1>
          <button className="edit-profile-btn w-1/4 grid place-items-center rounded-lg">
            Edit profile
          </button>
        </div>
      </div>
    </>
  );
};
