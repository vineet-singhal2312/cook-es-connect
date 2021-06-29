import React from "react";
import { useNavigate } from "react-router-dom";

export const NotificationCard = ({ notification }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bottom-nav-user-card w-4/5 h-24 border border-brand-border p-2  flex justify-between cursor-pointer hover:bg-gray-200  items-center"
      onClick={() => {
        navigate(`/users/${notification.sourceUserId._id}`);
      }}
    >
      <div className="w-3/5 flex ">
        {" "}
        <img
          alt="Remy Sharp"
          src={notification.sourceUserId.profilePictureImageUrl}
          className="l-avtar rounded-full"
        />
        <h1 className="ml-4 capitalize text-xl flex items-center ">
          {notification.sourceUserId.userName}{" "}
          <small className="normal-case ml-1">{notification.message}</small>{" "}
        </h1>
      </div>
      {notification.postId?.imageUrl && (
        <img
          className="h-4/5 w-1/10"
          alt="post img"
          src={notification.postId.imageUrl}
        />
      )}{" "}
    </div>
  );
};
