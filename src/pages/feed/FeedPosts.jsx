import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FeedCard } from "../../components/feedCard/FeedCard";
import { fetchPosts } from "../../features/postsSlice";

export const FeedPosts = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.login);
  const { posts, status, error } = useSelector((state) => state.post);

  useEffect(() => {
    console.log("pehle ye");
    if (status === "idle") {
      dispatch(fetchPosts(token));
    }
  }, [dispatch, status]);
  return (
    <div className="grid place-items-center mb-32">
      {posts.map((post) => (
        <FeedCard post={post} />
      ))}
    </div>
  );
};
