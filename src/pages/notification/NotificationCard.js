import React from "react";
import Avatar from "@material-ui/core/Avatar";

export const NotificationCard = ({ notification }) => {
  return (
    <div
      className="bottom-nav-user-card w-full h-24 text-brand-secondaryText border border-brand-border p-2 flex cursor-pointer hover:bg-gray-200  items-center"
      //   onClick={() => {
      //     navigate(`/users/${user._id}`);
      //     setIsSearch(false);
      //   }}
    >
      <div className="w-3/5 flex">
        {" "}
        <Avatar
          alt="Remy Sharp"
          src={notification.sourceUserId.profilePictureImageUrl}
          id="l-avtar-card-avtar"
        />
        <h1 className="ml-4 capitalize text-xl flex items-center ">
          {notification.sourceUserId.userName}{" "}
          <small className="normal-case ml-1">{notification.message}</small>{" "}
        </h1>
      </div>
    </div>
  );
};
