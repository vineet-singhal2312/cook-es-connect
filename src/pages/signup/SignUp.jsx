import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignUpHandler } from "../../utils/SignUp.utils";

export const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen grid place-content-center">
      <div className="sign-up-card h-1/2 w-1/3 bg-gray-600 rounded-lg relative z-20">
        <div className="sign-up-empty-div h-40 w-40 absolute -bottom-6 -right-16 z-30"></div>
        <div className="sign-up-empty-div h-24 w-28 absolute -top-6 -left-16 z-10"></div>

        <form className="w-3/4">
          {/* <label>
            NAME <em>&#x2a;</em>
          </label> */}
          <input
            placeholder="NAME"
            id="customerName"
            required=""
            type="text"
            className="sign-up-input rounded-full px-8"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {/* <label>
            EMAIL <em>&#x2a;</em>
          </label> */}
          <input
            placeholder="EMAIL"
            id="customerEmail"
            required=""
            type="email"
            className="sign-up-input rounded-full px-8"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <label>PASSWORD</label> */}
          <input
            placeholder="PASSWORD"
            id="customerPhone"
            type="password"
            className="sign-up-input rounded-full px-8"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
          {/* <label>CONFIRM PASSWORD</label> */}
          <input
            placeholder="CONFIRM PASSWORD"
            id="customerPhone"
            type="password"
            className="sign-up-input rounded-full px-8"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />

          <div className="sign-up-button-div mb-4  flex justify-center">
            <button
              className="sign-up-button text-xl"
              id="customerOrder"
              onClick={(e) =>
                SignUpHandler(
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
                )
              }
            >
              SIGN UP
            </button>
            {/* <Link to="/login"> */}
            {/* <button id="customerOrder">LOG IN</button> */}
            {/* </Link> */}
          </div>

          <p className="switch-page-description">
            already a user{" "}
            <Link to="/login" className="switch-page-link">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
