import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import {
  addCommentOnPost,
  CommentBoxButtonPressed,
} from "../../features/postsSlice";
import { FeedCardCommentBar } from "./FeedCardCommentBar";

export const PostCommentBox = () => {
  const [userComment, setUserComment] = useState("");
  const [deleteToBeCommentId, setDeleteToBeCommentId] = useState("");

  const [isDeleteComment, setIsDeleteComment] = useState(false);
  const { posts, currentPost } = useSelector((state) => state.post);
  const { token, name } = useSelector((state) => {
    return state.login;
  });
  const dispatch = useDispatch();
  const postId = currentPost._id;
  const post = posts.find((post) => post._id === postId);

  const isCurrentUserPost = post?.userId.userName === name;

  console.log(isCurrentUserPost);

  return (
    <div className=" post-comments-box fixed flex flex-col justify-between rounded-lg z-40 text-brand-secondaryText">
      <div
        className="absolute top-0 right-0 text-3xl cursor-pointer"
        onClick={() => dispatch(CommentBoxButtonPressed())}
      >
        <AiFillCloseCircle />
      </div>

      <div className="comments overflow-y-scroll ">
        {post.comments.map((commentInfo) => (
          <div className="single-comment-box border-brand-secondaryBorder flex  border-b p-4 text-left">
            <div className="w-4/5">
              <h1 className="single-comment-user-name text-xl">
                {commentInfo.userId.userName}
              </h1>
              <p>{commentInfo.comment}</p>
            </div>
            <div className="relative w-1/5 flex flex-col items-end justify-center text-xl cursor-pointer">
              <p>
                <BiDotsHorizontalRounded
                  onClick={() => {
                    setIsDeleteComment(!isDeleteComment);
                    setDeleteToBeCommentId(commentInfo._id);
                  }}
                />
              </p>
              {isCurrentUserPost ? (
                isDeleteComment &&
                deleteToBeCommentId === commentInfo._id && (
                  <button className="absolute top-8 -right-3 text-sm border-brand-secondaryBorder border rounded px-2 font-medium hover:opacity-80">
                    Delete
                  </button>
                )
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="comment-box-comment-bar flex justify-between align-center  w-full h-1/6  p-4 border-t border-brand-secondaryBorder">
        <input
          className="comment-input-comments-box w-3/4 px-4 rounded-2xl bg-transparent border-brand-secondaryBorder border "
          value={userComment}
          onChange={(e) => setUserComment(e.target.value)}
        ></input>
        <button
          className="add-comment-btn w-1/5 rounded-md hover:opacity-90 "
          onClick={() => {
            dispatch(addCommentOnPost({ token, postId, userComment }));
            setUserComment("");
          }}
        >
          Add comment
        </button>
      </div>
    </div>
  );
};
