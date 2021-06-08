import React from "react";

export const CreatPost = () => {
  return (
    <div className="creat-post w-full m-4 p-4 flex flex-col justify-around items-start ">
      <h2 className="w-4/5 h-1/5 flex items-center ">Creat your post</h2>
      <input className="creat-post-input " type="text" />
      <div className=" w-full h-1/5 flex items-center justify-end p-1">
        <button className="creat-post-btn grid place-items-center rounded-lg">
          save post
        </button>
      </div>
    </div>
  );
};
