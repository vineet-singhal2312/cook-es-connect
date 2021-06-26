import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "../../components/PostCard/PostCard";
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
    <div className="grid place-items-center w-full mb-32">
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
};
