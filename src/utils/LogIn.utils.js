import { ApiService } from "./ApiServirces";

export const LogInHandler = async (
  e,
  email,
  password,
  setEmail,
  setPassword,
  navigate
) => {
  e.preventDefault();
  try {
    const res = await ApiService(
      "post",

      {
        email,
        password,
      },
      "login"
    );
    console.log(res);
    setEmail("");
    setPassword("");
    loginUser(res);
  } catch (error) {
    // setLoginFailedModel(true);
    setEmail("");
    setPassword("");
    console.log(error);
  }
  function loginUser(res) {
    console.log(res);
    // setLogin(true);

    // setToken(res.data.token);
    // setUserName(res.data.userName);
    console.log("here");
    localStorage?.setItem(
      "login",
      JSON.stringify({
        isUserLoggedIn: true,
        token: res.token,
        name: res.userName,
      })
    );
    console.log("here again");

    navigate("/");
  }
};
