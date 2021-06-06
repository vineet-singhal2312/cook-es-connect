import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { BiDotsHorizontalRounded } from "react-icons/bi";

export const FeadCard = () => {
  return (
    <div className="feed-card  bg-blue-400 flex-col">
      <div className="feed-card-user flex justify-between p-2 h-16 bg-blue-900">
        <div className="feed-card-top flex-col cursor-pointer">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            id="feed-card-avtar"
          />
          <p>vineet singhal</p>
        </div>
        <div className=" grid items-center text-2xl cursor-pointer">
          <BiDotsHorizontalRounded />
        </div>
      </div>
      <div className="feed-card-middle">sdas</div>
      <div>sdas</div>
    </div>
  );
};
