import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "../../components/PostCard/PostCard";
import { fetchPosts } from "../../features/postsSlice";

export const FeedPosts = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.login);
  const { posts, status } = useSelector((state) => state.post);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts(token));
    }
  }, [dispatch, status, token]);
  return (
    <div className="grid place-items-center w-full mb-32">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};
