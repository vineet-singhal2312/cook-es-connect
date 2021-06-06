import React from "react";
import { FeadCard } from "../feedCard/FeadCard";

export const Feed = () => {
  return (
    <div className="flex flex-col  items-center h-full pt-16 w-3/4 bg-black">
      <FeadCard />
      <FeadCard />
      <FeadCard />
    </div>
  );
};
