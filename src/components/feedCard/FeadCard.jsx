import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { BiDotsHorizontalRounded } from "react-icons/bi";

export const FeadCard = ({ post }) => {
  console.log(post);
  return (
    <div className="feed-card border border-gray-200 m-1  flex-col">
      <div className="feed-card-user flex justify-between p-2 ">
        <div className="feed-card-top flex items-center cursor-pointer">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            id="feed-card-avtar"
          />
          <div className="feed-card-user-name-div flex flex-col items-start ml-4">
            <h1 className="feed-card-user-name capitalize text-lg">
              {post.userId.userName}
            </h1>
            <small>{post.date}</small>
          </div>
        </div>
        <div className=" grid items-center text-2xl cursor-pointer">
          <BiDotsHorizontalRounded />
        </div>
      </div>
      <div className="feed-card-middle  border-t border-b  flex">
        <div className="feed-card-content-div flex flex-col justify-start  text-left w-2/3">
          <h1 className="feed-card-title h-1/5 w-full text-lg p-4 flex justify-start">
            {post.postTitle}{" "}
          </h1>
          <div className="feed-card-content text-left px-4 py-8">
            {/* <div className="text-right"> */} {post.postContent}
            {/* </div> */}
          </div>
        </div>
        <div className="feed-card-img-div  w-1/3 flex items-center justify-center">
          <img
            src={post.imageUrl}
            className="feed-card-img w-4/5  object-scale-down"
            alt="feed-card-img"
          />
        </div>
      </div>
      <div className="feed-card-bottom  p-2 flex">
        <div className="w-1/5 ">{post.likes.length}👍</div>
        <div className="w-1/5">{post.dislikes.length}👎</div>
        <div className="w-1/5">{post.hearts.length}💓</div>
        <div className="w-1/5">{post.claps.length}👏</div>
        <div className="w-1/5">{post.laughs.length}😆</div>
      </div>
    </div>
  );
};
