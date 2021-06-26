import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BottomNav } from "../../components/bottomNav/BottomNav";
import { CreatPost } from "./CreatPost";
import { PostCommentBox } from "../../components/PostCard/PostCommentbox";
import { FeedProfileCard } from "./FeedProfileCard";
import { Header } from "../../components/header/Header";
import { fetchPosts } from "../../features/postsSlice";
import Interceptor from "../../middlewares/Interseptor";
import loginSlice from "../../features/loginSlice";
import { FeedPosts } from "./FeedPosts";

export const Feed = () => {
  // useEffect(() => {}, []);
  const { token } = useSelector((state) => state.login);

  const { posts, status, error, isCommentBox } = useSelector(
    (state) => state.post
  );

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("pehle ye");
    if (status === "idle") {
      dispatch(fetchPosts(token));
    }
  }, [dispatch, status]);
  console.log(token);
  return (
    <>
      {/* <Interceptor /> */}
      <Header />
      <BottomNav />

      {isCommentBox && <PostCommentBox />}
      {/* {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error...{error}</div>} */}
      <div className="feed-outer-div sm:container md:mx-auto md:px-20 h-screen flex flex-col items-center">
        <div className="profile-content flex flex-col mt-12  items-center  pt-4 h-full w-full overflow-x-auto">
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
