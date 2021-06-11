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
  navigate
) => {
  e.preventDefault();
  try {
    console.log(userName);
    console.log(email);
    console.log(password1);
    console.log(password2);

  await ApiService(
      "post",
      {
        userName,
        email,
        password: password1,
        confirmPassword: password2,
      },
      "signup"
    );

    setUserName("");
    setEmail("");
    setPassword1("");
    setPassword2("");
    navigate("/login");
  } catch (error) {
    console.log(error);
    // console.log(error.data);
  }
};
