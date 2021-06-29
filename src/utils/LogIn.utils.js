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
  await dispatch(userLogin({ email, password, navigate }));
};
export const LogOut = (dispatch) => {
  dispatch(userPressedLogout());
  localStorage?.removeItem("login");
};
