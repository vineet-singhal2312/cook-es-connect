import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LogInHandler, LogOut } from "../../utils/LogIn";
import { InstructionModal } from "../../components/InstructionsModal/InstructionModal";
import { Alert } from "../../components/alert/Alert";
// import Alert from "@material-ui/lab/Alert";
export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isUserLoggedIn } = useSelector((state) => state.login);
  const { isAxios } = useSelector((state) => state.alert);
  useEffect(() => {
    if (isUserLoggedIn) {
      LogOut(dispatch);
    }
  }, []);
  return (
    <div className="w-full h-screen grid place-content-center">
      <div className="log-in-card h-1/2 w-1/3 bg-gray-600 rounded-lg relative z-20">
        <div className="log-in-empty-div h-16 w-12 md:h-20 md:w-20 absolute -bottom-10 right-4  md:-bottom-6 md:-right-12 z-30"></div>
        <div className="log-in-empty-div h-12 w-12  md:h-12 md:w-16 absolute -top-6 left-4 md:-left-8 z-10"></div>
        {/* {isAxios && <Alert message="Check your Email or Password" />} */}{" "}
        <img
          src="/./images/company-logo.png"
          alt="img"
          className="header-logo-img h-1/10 w-3/5 md:w-1/2"
        />
        <form
          className="w-3/4"
          onSubmit={(e) =>
            LogInHandler(
              e,
              email,
              password,
              setEmail,
              setPassword,
              navigate,
              dispatch
            )
          }
        >
          {isAxios && (
            <h1 className="mb-4 text-red-400 text-lg">
              Check your Email or Password
            </h1>
          )}

          <input
            placeholder="EMAIL"
            id="customerEmail"
            required
            type="email"
            className="log-in-input rounded-full px-8"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="PASSWORD"
            id="customerPhone"
            type="password"
            required
            className="log-in-input rounded-full px-8"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

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
                type="submit"
              >
                Log In
              </button>
            )}
          </div>

          <p className="switch-page-description">
            create account{" "}
            <Link to="/sign-up" className="switch-page-link">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
