import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BottomNav } from "../../components/bottomNav/BottomNav";
import { CreatPost } from "../../components/creatPost/CreatPost";
import { FeadCard } from "../../components/feedCard/FeadCard";
import { FeedProfileCard } from "../../components/feedProfileCard/FeedProfileCard";
import { Header } from "../../components/header/Header";
import { fetchPosts } from "../../features/postsSlice";

export const Feed = () => {
  useEffect(() => {}, []);
  const { token } = useSelector((state) => state.login);

  const { posts, status, error } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts(token));
    }
  }, [dispatch, status]);
  return (
    <>
      <Header />
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error...{error}</div>}
      <div className="feed-outer-div sm:container md:mx-auto md:px-20 h-screen flex flex-col">
        <BottomNav />

        <div className="feed-posts flex flex-col mt-12  items-center  pt-4 h-full w-full overflow-x-auto">
          <div className="flex  w-full px-16">
            <FeedProfileCard />
            <CreatPost />
          </div>

          {posts.map((post) => (
            <FeadCard post={post} />
          ))}
          {/* 
          <FeadCard />
          <FeadCard /> */}
        </div>
      </div>
    </>
  );
};
