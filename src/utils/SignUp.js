import axios from "axios";
import { axiosLoad } from "../features/alertSlice";
import { userLogin } from "../features/loginSlice";
import { ApiService } from "./ApiServirces";

export const SignUpHandler = async (
  e,
  userName,
  email,
  password1,
  password2,
  navigate,
  selectedProfilePicture,
  dispatch
) => {
  e.preventDefault();
  dispatch(axiosLoad());
  let formData = new FormData();
  formData.append("file", selectedProfilePicture);
  formData.append("upload_preset", "cook-es-connect");
  formData.append("cloud_name", "dxlube6si");
  e.preventDefault();
  try {
    let data = await axios.post(
      "https://api.cloudinary.com/v1_1/dxlube6si/image/upload",
      formData
    );
    const profilePictureImageUrl = data.data.secure_url;
    await ApiService(
      "post",
      {
        userName,
        email,
        password: password1,
        confirmPassword: password2,
        profilePictureImageUrl,
      },
      "signup"
    );
    await dispatch(userLogin({ email, password: password1, navigate }));

    dispatch(axiosLoad());
  } catch (error) {
    console.log(error);
    dispatch(axiosLoad());
  }
};
