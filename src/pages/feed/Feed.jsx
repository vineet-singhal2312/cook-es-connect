import React from "react";
import { BottomNav } from "../../components/bottomNav/BottomNav";
import { CreatPost } from "../../components/creatPost/CreatPost";
import { FeadCard } from "../../components/feedCard/FeadCard";
import { FeedProfileCard } from "../../components/feedProfileCard/FeedProfileCard";
import { Header } from "../../components/header/Header";

export const Feed = () => {
  return (
    <>
      <Header />

      <div className="feed-outer-div sm:container md:mx-auto md:px-20 h-screen flex flex-col">
        <BottomNav />

        <div className="feed-posts flex flex-col mt-12 items-center  pt-4  w-full overflow-x-auto">
          <div className="flex w-full px-16">
            <FeedProfileCard />
            <CreatPost />
          </div>
          <FeadCard />
          <FeadCard />
          <FeadCard />
        </div>
      </div>
    </>
  );
};
