import axios from "axios";
import { addTimeLinePhoto } from "../features/profileSlice";

export const uploadTimeLinePhoto = async (
  token,
  selectedImage,
  setSelectedImage,
  dispatch
) => {
  let formData = new FormData();
  formData.append("file", selectedImage);
  formData.append("upload_preset", "cook-es-connect");
  formData.append("cloud_name", "dxlube6si");

  try {
    let data = await axios.post(
      "https://api.cloudinary.com/v1_1/dxlube6si/image/upload",
      formData
    );
    const timelineImageUrl = data.data.secure_url;
    await dispatch(
      addTimeLinePhoto({
        token,
        timelineImageUrl,
      })
    );
    setSelectedImage("");
  } catch (error) {
    console.log(error);
  }
};
