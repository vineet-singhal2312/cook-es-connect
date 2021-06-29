import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { PostCardReactionBar } from "./PostCardReactionBar";
import { PostCardCommentBar } from "./PostCardCommentBar";

const transformDateString = (time) => {
  const date = new Date(time);

  const currentDate = date.toLocaleString("en-US");
  return currentDate;
};

export const PostCard = ({ post }) => {
  return (
    <div className="post-card background-0 border border-gray-200 m-2 rounded  flex-col">
      <div className="post-card-user flex justify-between p-2 ">
        <div className="post-card-top flex items-center cursor-pointer">
          <img
            alt="Remy Sharp"
            src={post.userId?.profilePictureImageUrl}
            className="s-avtar rounded-full"
          />
          <div className="post-card-user-name-div flex flex-col items-start ml-4">
            <h1 className="post-card-user-name capitalize text-lg">
              {post.userId?.userName}
            </h1>
            <small>{transformDateString(post?.createdAt)}</small>
          </div>
        </div>
        <div className=" grid items-center text-2xl cursor-pointer">
          <BiDotsHorizontalRounded />
        </div>
      </div>
      <div className="post-card-middle  border-t border-b  flex">
        <div className="post-card-content-div flex flex-col justify-start  text-left w-2/3">
          <h1 className="post-card-title h-1/5 w-full text-lg p-4 flex justify-start">
            {post.postTitle}{" "}
          </h1>
          <div className="post-card-content text-left px-4 py-8">
            {post.postContent}
          </div>
        </div>
        <div className="post-card-img-div  w-1/3 flex items-center justify-center">
          <img
            src={post.imageUrl}
            className="post-card-img w-4/5  object-scale-down"
            alt="post-card-img"
          />
        </div>
      </div>
      <div className="post-card-bottom flex flex-col ">
        <PostCardReactionBar post={post} />
        <PostCardCommentBar post={post} />
      </div>
    </div>
  );
};
