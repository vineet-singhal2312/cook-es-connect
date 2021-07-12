import axios from "axios";
import { ApiService } from "./ApiServirces";

export const SignUpHandler = async (
  e,
  userName,
  email,
  password1,
  password2,
  setUserName,
  setEmail,
  setPassword1,
  setPassword2,
  navigate,
  selectedProfilePicture
) => {
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

    setUserName("");
    setEmail("");
    setPassword1("");
    setPassword2("");
    navigate("/");
  } catch (error) {
    console.log(error);
    // console.log(error.data);
  }
};
