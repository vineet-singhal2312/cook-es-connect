import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export const NotificationCard = ({ notification }) => {
  const navigate = useNavigate();
  return (
    <div
      className="notification-card w90 md:w-4/5 h-24 border border-brand-border p-2  flex justify-between cursor-pointer hover:bg-gray-200  items-center"
      onClick={() => {
        navigate(`/users/${notification.sourceUserId._id}`);
      }}
    >
      <div className="md:w-3/5 flex justify-start items-center">
        {" "}
        <img
          alt="Remy Sharp"
          src={notification.sourceUserId.profilePictureImageUrl}
          className="l-avtar rounded-full"
        />
        <div className="flex flex-col justify-center items-start p-4">
          <h1 className=" capitalize text-base md:text-xl flex items-center ">
            {notification.sourceUserId.userName}{" "}
            <small className="normal-case ml-1">{notification.message}</small>{" "}
          </h1>
          <p className="text-sm md:text-base">
            {moment(notification.createdAt).fromNow()}
          </p>
        </div>
      </div>
      {notification.postId?.imageUrl && (
        <img
          className="hidden md:block h-4/5 w-1/10"
          alt="post img"
          src={notification.postId.imageUrl}
        />
      )}{" "}
    </div>
  );
};
