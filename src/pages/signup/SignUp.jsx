import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignUpHandler } from "../../utils/SignUp";
import { TiTick } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../components/loader/Loader";

export const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [selectedProfilePicture, setSelectedProfilePicture] = useState("");
  const { isAxios, isLoading } = useSelector((state) => state.alert);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      {isLoading && <Loader />}
      <div className="w-full h-screen grid place-content-center">
        <div className="sign-up-card h-1/2 w-1/3 bg-gray-600 rounded-lg relative z-20">
          <div className="sign-up-empty-div hidden md:block h-40 w-40 absolute -bottom-6 -right-16 z-30"></div>
          <div className="sign-up-empty-div hidden md:block  h-24 w-28 absolute -top-6 -left-16 z-10"></div>
          <img
            src="/./images/company-logo.png"
            alt="img"
            className="header-logo-img h-20 w-3/5 md:w-1/2"
          />{" "}
          {isAxios && (
            <h1 className=" text-red-400 text-lg">Check your Details</h1>
          )}
          <form
            className="w-full md:w-3/4 p-4"
            onSubmit={(e) =>
              SignUpHandler(
                e,
                userName,
                email,
                password1,
                password2,
                navigate,
                selectedProfilePicture,
                dispatch
              )
            }
          >
            <input
              placeholder="NAME"
              id="customerName"
              required
              type="text"
              className="sign-up-input rounded-full px-8"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              placeholder="EMAIL"
              id="customerEmail"
              required
              type="email"
              className="sign-up-input rounded-full px-8"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="PASSWORD"
              id="customerPhone"
              type="password"
              required
              className="sign-up-input rounded-full px-8"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
            <input
              placeholder="CONFIRM PASSWORD"
              id="customerPhone"
              type="password"
              required
              className="sign-up-input rounded-full px-8"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />

            {selectedProfilePicture ? (
              <label className="fileContainer flex justify-center">
                <p>Uploaded</p>
                <div className="flex justify-center items-center ml-4">
                  <TiTick />
                </div>

                <input
                  className="post-image w-1/10"
                  type="file"
                  onChange={(e) => setSelectedProfilePicture(e.target.files[0])}
                />
              </label>
            ) : (
              <label className="fileContainer">
                Upload a photo!
                <input
                  className="post-image w-1/10"
                  type="file"
                  onChange={(e) => setSelectedProfilePicture(e.target.files[0])}
                />
              </label>
            )}

            <div className="sign-up-button-div mb-4 mt-8 flex justify-center">
              <button
                className="sign-up-button text-xl"
                id="customerOrder"
                type="submit"
              >
                SIGN UP
              </button>
            </div>

            <p className="switch-page-description">
              already a user{" "}
              <Link to="/" className="switch-page-link">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
