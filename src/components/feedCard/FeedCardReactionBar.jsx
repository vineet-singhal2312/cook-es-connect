import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addReactionOnPost,
  deleteReactionFromPost,
} from "../../features/postsSlice";

export const FeedCardReactionBar = ({ post }) => {
  const dispatch = useDispatch();
  const postId = post._id;
  const { token } = useSelector((state) => state.login);
  const isReactionOnPost = (userIdArrayOnReaction, currentUserId) => {
    return userIdArrayOnReaction.includes(currentUserId);
  };
  return (
    <>
      <div className="feed-card-reaction-bar p-2 flex ">
        {isReactionOnPost(
          post.likes.map((user) => user._id),
          post.userId._id
        ) ? (
          <button
            className="like-dislike-button w-1/5  "
            onClick={() =>
              dispatch(
                deleteReactionFromPost({ token, postId, routeName: "likes" })
              )
            }
          >
            👍
          </button>
        ) : (
          <button
            className="like-dislike-button w-1/5 "
            onClick={() =>
              dispatch(addReactionOnPost({ token, postId, routeName: "likes" }))
            }
          >
            👍
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
            👎
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
            👎
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
            💓
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
            💓
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
            👏
          </button>
        ) : (
          <button
            className="like-dislike-button w-1/5 "
            onClick={() =>
              dispatch(addReactionOnPost({ token, postId, routeName: "claps" }))
            }
          >
            👏
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
            😆
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
            😆
          </button>
        )}
      </div>
    </>
  );
};
