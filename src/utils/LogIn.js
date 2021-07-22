import { userLogin, userPressedLogout } from "../features/loginSlice";

export const LogInHandler = async (
  e,
  email,
  password,
  setEmail,
  setPassword,
  navigate,
  dispatch
) => {
  e.preventDefault();
  dispatch(userLogin({ email, password, navigate }));
  // await navigate("/feed");
};
export const LogOut = (dispatch) => {
  dispatch(userPressedLogout());
  localStorage?.removeItem("login");
};
