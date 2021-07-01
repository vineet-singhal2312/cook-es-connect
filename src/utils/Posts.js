import axios from "axios";
import { addPost } from "../features/postsSlice";

export const uploadPost = async ({
  selectedImage,
  dispatch,
  token,
  postTitle,
  postCaption,
  setPostTitle,
  setPostCaption,
  setSelectedImage,
}) => {
  let formData = new FormData();
  formData.append("file", selectedImage);
  formData.append("upload_preset", "cook-es-connect");
  formData.append("cloud_name", "dxlube6si");

  try {
    let data = await axios.post(
      "https://api.cloudinary.com/v1_1/dxlube6si/image/upload",
      formData
    );
    console.log(data.data.secure_url);
    const imageUrl = data.data.secure_url;
    dispatch(
      addPost({
        token,
        postTitle,
        postCaption,
        imageUrl,
      })
    );

    setPostTitle("");
    setPostCaption("");
    setSelectedImage("");
  } catch (error) {
    console.log(error);
  }

  //   const file = data.data;
};
