import { userLogin, userPressedLogout } from "../features/loginSlice";
import { ApiService } from "./ApiServirces";

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
  await dispatch(userLogin({ email, password }));

  console.log("here again");
  navigate("/");
};
export const LogOut = (dispatch) => {
  dispatch(userPressedLogout());
  localStorage?.removeItem("login");
};
