import React from "react";
import Avatar from "@material-ui/core/Avatar";

export const SideNavUserCard = () => {
  return (
    <div className="bottom-nav-user-card h-16 border border-gray-200 p-2 flex  items-center">
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        id="feed-card-avtar"
      />
      <p className="ml-4">vineet singhal</p>
    </div>
  );
};
