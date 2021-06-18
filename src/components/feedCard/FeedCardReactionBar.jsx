import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addReactionOnPost,
  deleteReactionFromPost,
} from "../../features/postsSlice";

export const FeadCardReactionBar = ({ post }) => {
  const dispatch = useDispatch();
  const postId = post._id;
  const { token } = useSelector((state) => state.login);
  const isReactionOnPost = (userIdArrayOnReaction, currentUserId) => {
    return userIdArrayOnReaction.includes(currentUserId);
  };
  return (
    <>
      <div className="feed-card-bottom  p-2 flex">
        {isReactionOnPost(
          post.likes.map((user) => user._id),
          post.userId._id
        ) ? (
          <button
            className="like-dislike-button w-1/5 "
            onClick={() =>
              dispatch(
                deleteReactionFromPost({ token, postId, routeName: "likes" })
              )
            }
          >
            {post.likes.length}👍
          </button>
        ) : (
          <button
            className="like-dislike-button w-1/5 "
            onClick={() =>
              dispatch(addReactionOnPost({ token, postId, routeName: "likes" }))
            }
          >
            {post.likes.length}👍
          </button>
        )}

        {isReactionOnPost(
          post.dislikes.map((user) => user._id),
          post.userId._id
        ) ? (
          <button
            className="like-dislike-button w-1/5 "
            onClick={() =>
              dispatch(
                deleteReactionFromPost({ token, postId, routeName: "dislikes" })
              )
            }
          >
            {post.dislikes.length}👎
          </button>
        ) : (
          <button
            className="like-dislike-button w-1/5 "
            onClick={() =>
              dispatch(
                addReactionOnPost({ token, postId, routeName: "dislikes" })
              )
            }
          >
            {post.dislikes.length}👎
          </button>
        )}

        {isReactionOnPost(
          post.hearts.map((user) => user._id),
          post.userId._id
        ) ? (
          <button
            className="like-dislike-button w-1/5 "
            onClick={() =>
              dispatch(
                deleteReactionFromPost({ token, postId, routeName: "hearts" })
              )
            }
          >
            {post.hearts.length}💓
          </button>
        ) : (
          <button
            className="like-dislike-button w-1/5 "
            onClick={() =>
              dispatch(
                addReactionOnPost({ token, postId, routeName: "hearts" })
              )
            }
          >
            {post.hearts.length}💓
          </button>
        )}

        {isReactionOnPost(
          post.claps.map((user) => user._id),
          post.userId._id
        ) ? (
          <button
            className="like-dislike-button w-1/5 "
            onClick={() =>
              dispatch(
                deleteReactionFromPost({ token, postId, routeName: "claps" })
              )
            }
          >
            {post.claps.length}👏
          </button>
        ) : (
          <button
            className="like-dislike-button w-1/5 "
            onClick={() =>
              dispatch(addReactionOnPost({ token, postId, routeName: "claps" }))
            }
          >
            {post.claps.length}👏
          </button>
        )}

        {isReactionOnPost(
          post.laughs.map((user) => user._id),
          post.userId._id
        ) ? (
          <button
            className="like-dislike-button w-1/5 "
            onClick={() =>
              dispatch(
                deleteReactionFromPost({ token, postId, routeName: "laughs" })
              )
            }
          >
            {post.laughs.length}😆
          </button>
        ) : (
          <button
            className="like-dislike-button w-1/5 "
            onClick={() =>
              dispatch(
                addReactionOnPost({ token, postId, routeName: "laughs" })
              )
            }
          >
            {post.laughs.length}😆
          </button>
        )}
      </div>
    </>
  );
};
