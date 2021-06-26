import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../features/loginSlice";
import { LogInHandler, LogOut } from "../../utils/LogIn.utils";
import { SignUpHandler } from "../../utils/SignUp.utils";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isUserLoggedIn } = useSelector((state) => state.login);
  // const loginstate = useSelector((state) => state.login);

  // console.log(loginstate);
  //   console.log(password);

  return (
    <div className="w-full h-screen grid place-content-center">
      <div className="log-in-card h-1/2 w-1/3 bg-gray-600 rounded-lg relative z-20">
        <div className="log-in-empty-div h-20 w-20 absolute -bottom-6 -right-12 z-30"></div>
        <div className="log-in-empty-div h-12 w-16 absolute -top-6 -left-8 z-10"></div>

        <form className="w-3/4">
          {/* <label>
            NAME <em>&#x2a;</em>
          </label> */}
          {/* <input
            placeholder="NAME"
            id="customerName"
            required=""
            type="text"
            className="log-in-input rounded-full px-8"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          /> */}
          {/* <label>
            EMAIL <em>&#x2a;</em>
          </label> */}
          <input
            placeholder="EMAIL"
            id="customerEmail"
            required=""
            type="email"
            className="log-in-input rounded-full px-8"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <label>PASSWORD</label> */}
          <input
            placeholder="PASSWORD"
            id="customerPhone"
            type="password"
            className="log-in-input rounded-full px-8"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <label>CONFIRM PASSWORD</label> */}
          {/* <input
            placeholder="CONFIRM PASSWORD"
            id="customerPhone"
            type="password"
            className="log-in-input rounded-full px-8"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          /> */}

          <div className="log-in-button-div mb-4  flex justify-center">
            {isUserLoggedIn ? (
              <button
                className="log-in-button"
                id="customerOrder"
                onClick={() => LogOut(dispatch)}
              >
                Log Out
              </button>
            ) : (
              <button
                className="log-in-button"
                id="customerOrder"
                onClick={
                  (e) =>
                    LogInHandler(
                      e,
                      email,
                      password,
                      setEmail,
                      setPassword,
                      navigate,
                      dispatch
                    )

                  // dispatch(userLogin({ email, password }))
                }
              >
                Log In
              </button>
            )}
          </div>

          <p className="switch-page-description">
            creat account{" "}
            <Link to="/" className="switch-page-link">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
