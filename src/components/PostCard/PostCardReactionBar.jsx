import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegLaughSquint } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";

import { AiOutlineDislike } from "react-icons/ai";

import {
  addReactionOnPost,
  deleteReactionFromPost,
} from "../../features/postsSlice";

export const PostCardReactionBar = ({ post }) => {
  const dispatch = useDispatch();
  const postId = post._id;
  const { token, currentUserId } = useSelector((state) => state.login);

  const isReactionOnPost = (userIdArrayOnReaction, currentUserId) => {
    return userIdArrayOnReaction.includes(currentUserId);
  };
  // console.log(post);
  // console.log(post.hearts.map((user) => user._id));
  // console.log(currentUserId);
  // console.log(isReactionOnPost);
  // console.log(
  //   isReactionOnPost(
  //     post.hearts.map((user) => user._id),
  //     currentUserId
  //   )
  // );
  return (
    <>
      <div className="feed-card-reaction-bar p-2 flex ">
        {isReactionOnPost(
          post.likes.map((user) => user._id),
          currentUserId
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
            className="like-dislike-button w-1/5 grid place-items-center"
            onClick={() =>
              dispatch(addReactionOnPost({ token, postId, routeName: "likes" }))
            }
          >
            <AiOutlineLike />
          </button>
        )}

        {isReactionOnPost(
          post.dislikes.map((user) => user._id),
          currentUserId
        ) ? (
          <button
            className="like-dislike-button w-1/5 grid place-items-center"
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
            className="like-dislike-button w-1/5 grid place-items-center"
            onClick={() =>
              dispatch(
                addReactionOnPost({ token, postId, routeName: "dislikes" })
              )
            }
          >
            <AiOutlineDislike />
          </button>
        )}

        {isReactionOnPost(
          post.hearts.map((user) => user._id),
          currentUserId
        ) ? (
          <button
            className="like-dislike-button w-1/5 grid place-items-center"
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
            className="like-dislike-button w-1/5 grid place-items-center"
            onClick={() =>
              dispatch(
                addReactionOnPost({ token, postId, routeName: "hearts" })
              )
            }
          >
            <AiOutlineHeart />
          </button>
        )}

        {isReactionOnPost(
          post.claps.map((user) => user._id),
          currentUserId
        ) ? (
          <button
            className="like-dislike-button w-1/5 grid place-items-center"
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
            className="like-dislike-button w-1/5 grid place-items-center"
            onClick={() =>
              dispatch(addReactionOnPost({ token, postId, routeName: "claps" }))
            }
          >
            👏
          </button>
        )}

        {isReactionOnPost(
          post.laughs.map((user) => user._id),
          currentUserId
        ) ? (
          <button
            className="like-dislike-button w-1/5 grid place-items-center"
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
            className="like-dislike-button w-1/5 grid place-items-center"
            onClick={() =>
              dispatch(
                addReactionOnPost({ token, postId, routeName: "laughs" })
              )
            }
          >
            <FaRegLaughSquint />
          </button>
        )}
      </div>
    </>
  );
};
