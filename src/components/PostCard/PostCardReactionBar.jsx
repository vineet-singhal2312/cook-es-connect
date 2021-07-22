import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegLaughSquint } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { IoRocketOutline } from "react-icons/io5";

import { AiOutlineDislike } from "react-icons/ai";

import {
  addReactionOnPost,
  deleteReactionFromPost,
} from "../../features/postsSlice";
import { throttleReactionRequest } from "../../utils/Throttling";
import { setProfileStatusToIdle } from "../../features/profileSlice";
import { setSearchedProfileStatusToIdle } from "../../features/searchedProfileSlice";

export const PostCardReactionBar = ({ post }) => {
  const dispatch = useDispatch();
  const postId = post._id;
  const { token, currentUserId } = useSelector((state) => state.login);

  const isReactionOnPost = (userIdArrayOnReaction, currentUserId) => {
    return userIdArrayOnReaction.includes(currentUserId);
  };

  return (
    <>
      <div className="post-card-reaction-bar p-2 flex text-brand-primaryText">
        {isReactionOnPost(
          post.likes.map((user) => user._id),
          currentUserId
        ) ? (
          <button
            className="like-dislike-button hover:text-lg w-1/5  grid place-items-center "
            onClick={async () => {
              await throttleReactionRequest({
                dispatch,
                dispatchFunc: deleteReactionFromPost,
                token,
                postId,
                routeName: "likes",
              });
              await dispatch(setProfileStatusToIdle());
              await dispatch(setSearchedProfileStatusToIdle());
            }}
          >
            👍
          </button>
        ) : (
          <button
            className="like-dislike-button w-1/5 grid place-items-center "
            onClick={async () => {
              await throttleReactionRequest({
                dispatch,
                dispatchFunc: addReactionOnPost,
                token,
                postId,
                routeName: "likes",
              });
              await dispatch(setProfileStatusToIdle());
              await dispatch(setSearchedProfileStatusToIdle());
            }}
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
            onClick={async () => {
              await throttleReactionRequest({
                dispatch,
                dispatchFunc: deleteReactionFromPost,
                token,
                postId,
                routeName: "dislikes",
              });
              await dispatch(setProfileStatusToIdle());
              await dispatch(setSearchedProfileStatusToIdle());
            }}
          >
            👎
          </button>
        ) : (
          <button
            className="like-dislike-button w-1/5 grid place-items-center"
            onClick={async () => {
              await throttleReactionRequest({
                dispatch,
                dispatchFunc: addReactionOnPost,
                token,
                postId,
                routeName: "dislikes",
              });
              await dispatch(setProfileStatusToIdle());
              await dispatch(setSearchedProfileStatusToIdle());
            }}
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
            onClick={async () => {
              await throttleReactionRequest({
                dispatch,
                dispatchFunc: deleteReactionFromPost,
                token,
                postId,
                routeName: "hearts",
              });
              await dispatch(setProfileStatusToIdle());
              await dispatch(setSearchedProfileStatusToIdle());
            }}
          >
            💓
          </button>
        ) : (
          <button
            className="like-dislike-button w-1/5 grid place-items-center"
            onClick={async () => {
              await throttleReactionRequest({
                dispatch,
                dispatchFunc: addReactionOnPost,
                token,
                postId,
                routeName: "hearts",
              });
              await dispatch(setProfileStatusToIdle());
              await dispatch(setSearchedProfileStatusToIdle());
            }}
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
            onClick={async () => {
              await throttleReactionRequest({
                dispatch,
                dispatchFunc: deleteReactionFromPost,
                token,
                postId,
                routeName: "claps",
              });
              await dispatch(setProfileStatusToIdle());
              await dispatch(setSearchedProfileStatusToIdle());
            }}
          >
            🚀
          </button>
        ) : (
          <button
            className="like-dislike-button w-1/5 grid place-items-center"
            onClick={async () => {
              await throttleReactionRequest({
                dispatch,
                dispatchFunc: addReactionOnPost,
                token,
                postId,
                routeName: "claps",
              });
              await dispatch(setProfileStatusToIdle());
              await dispatch(setSearchedProfileStatusToIdle());
            }}
          >
            <IoRocketOutline />
          </button>
        )}

        {isReactionOnPost(
          post.laughs.map((user) => user._id),
          currentUserId
        ) ? (
          <button
            className="like-dislike-button w-1/5 grid place-items-center"
            onClick={async () => {
              await throttleReactionRequest({
                dispatch,
                dispatchFunc: deleteReactionFromPost,
                token,
                postId,
                routeName: "laughs",
              });
              await dispatch(setProfileStatusToIdle());
              await dispatch(setSearchedProfileStatusToIdle());
            }}
          >
            😆
          </button>
        ) : (
          <button
            className="like-dislike-button w-1/5 grid place-items-center"
            onClick={async () => {
              await throttleReactionRequest({
                dispatch,
                dispatchFunc: addReactionOnPost,
                token,
                postId,
                routeName: "laughs",
              });
              await dispatch(setProfileStatusToIdle());
              await dispatch(setSearchedProfileStatusToIdle());
            }}
          >
            <FaRegLaughSquint />
          </button>
        )}
      </div>
    </>
  );
};
