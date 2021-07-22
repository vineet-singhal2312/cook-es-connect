import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BottomNav } from "../../components/bottomNav/BottomNav";
import { CreatPost } from "./CreatPost";
import { PostCommentBox } from "../../components/PostCard/PostCommentbox";
import { FeedProfileCard } from "./FeedProfileCard";
import { Header } from "../../components/header/Header";
import { fetchPosts } from "../../features/postsSlice";
import { FeedPosts } from "./FeedPosts";
import { Loader } from "../../components/loader/Loader";

export const Feed = () => {
  const { token } = useSelector((state) => state.login);
  const { status, isCommentBox } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts(token));
    }
  }, [dispatch, status, token]);
  return (
    <>
      <Header />
      <BottomNav />
      {status === "loading" && <Loader />}
      {isCommentBox && <PostCommentBox />}
      <div className="feed-outer-div sm:container md:mx-auto md:px-20 h-screen flex flex-col items-center">
        <div className="profile-content flex flex-col mt-12  items-center  pt-4 h-full w-full overflow-x-auto scrollbar-hidden">
          <div className="flex justify-between w90">
            <FeedProfileCard />
            <CreatPost />
          </div>
          <div className="grid place-items-center mt-2 w-full mb-32">
            <FeedPosts />
          </div>
        </div>
      </div>
    </>
  );
};
