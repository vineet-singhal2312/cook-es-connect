import React from "react";
import { FeadCard } from "../feedCard/FeadCard";

export const Feed = () => {
  return (
    <div className="feed flex flex-col md:mx-12  my-12 items-center  pt-4  w-full overflow-x-auto">
      <FeadCard />
      <FeadCard />
      <FeadCard />
    </div>
  );
};
