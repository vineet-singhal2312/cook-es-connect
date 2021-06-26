import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../features/postsSlice";
import { TiTick } from "react-icons/ti";
import { uploadPost } from "../../utils/Posts";

export const CreatPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postCaption, setPostCaption] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const dispatch = useDispatch();
  console.log(postCaption, postTitle, selectedImage);

  const { token } = useSelector((state) => state.login);
  // console.log(token);
  return (
    <div className="creat-post w-full p-4 flex flex-col justify-around items-start relative">
      <h2 className="w-4/5 h-1/10 flex items-center ">Creat your post</h2>
      <input
        className="post-title px-4"
        type="text"
        placeholder="Title"
        onChange={(e) => setPostTitle(e.target.value)}
        value={postTitle}
      />
      <input
        className="post-content px-4"
        type="text"
        placeholder="Caption"
        onChange={(e) => setPostCaption(e.target.value)}
        value={postCaption}
      />

      <div className=" w-full h-1/5 flex items-center justify-between p-1">
        {selectedImage ? (
          <label class="fileContainer flex">
            <p>Uploaded</p>
            <div className="flex justify-center items-center ml-4">
              <TiTick />
            </div>

            <input
              className="post-image w-1/10"
              type="file"
              onChange={(e) => setSelectedImage(e.target.files[0])}
              // value={selectedImage}
            />
          </label>
        ) : (
          <label class="fileContainer">
            Upload a photo!
            <input
              className="post-image w-1/10"
              type="file"
              onChange={(e) => setSelectedImage(e.target.files[0])}
              // value={selectedImage}
            />
          </label>
        )}
        <button
          className="creat-post-btn grid place-items-center rounded-lg"
          onClick={() =>
            uploadPost(
              selectedImage,
              dispatch,
              token,
              postTitle,
              postCaption,
              setPostTitle,
              setPostCaption,
              setSelectedImage
            )
          }
        >
          save post
        </button>
      </div>
    </div>
  );
};
