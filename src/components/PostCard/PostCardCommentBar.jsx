import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCommentOnPost,
  CommentBoxButtonPressed,
} from "../../features/postsSlice";

export const PostCardCommentBar = ({ post }) => {
  const [userComment, setUserComment] = useState("");
  const { token } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const postId = post._id;
  // const isComment =;
  // console.log(isComment);
  return (
    <div className="post-card-comment-bar flex flex-col border-t ">
      <div className="reaction-count-bar flex justify-between text-left w-full h-1/4  px-4">
        <p className="reaction-count w-3/5">
          {post.likes.length +
            post.dislikes.length +
            post.hearts.length +
            post.claps.length +
            post.laughs.length}{" "}
          people reacted on your post
        </p>
        <p
          className="see-comments cursor-pointer text-sm md:text-lg text-right w-1/5"
          onClick={() => dispatch(CommentBoxButtonPressed(post))}
        >
          See comments
        </p>
      </div>
      <div className="comment-box flex justify-between align-center  w-full h-3/4  p-2">
        <input
          className="comment-input background-0 rounded-2xl w-3/5 md:w-3/4 px-4"
          value={userComment}
          onChange={(e) => setUserComment(e.target.value)}
        ></input>
        <button
          disabled={userComment === "" ? true : false}
          className="add-comment-btn background-btn-1 text-sm md:text-lg font-medium p-1 md:w-1/5 rounded-md hover:opacity-90 "
          onClick={() => {
            dispatch(addCommentOnPost({ token, postId, userComment }));
            setUserComment("");
          }}
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};
