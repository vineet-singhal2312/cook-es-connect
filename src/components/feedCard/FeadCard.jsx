import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { BiDotsHorizontalRounded } from "react-icons/bi";

export const FeadCard = () => {
  return (
    <div className="feed-card border border-gray-200   flex-col">
      <div className="feed-card-user flex justify-between p-2 h-2/6 ">
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
      <div className="feed-card-middle h-3/6 border-t border-b border-gray-200 ">
        sdas
      </div>
      <div className="feed-card-bottum h-1/6 px-2 pb-2 ">sdas</div>
    </div>
  );
};
