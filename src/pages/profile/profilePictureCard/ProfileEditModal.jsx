import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  EditProfileButtonPressed,
  updateUserInfo,
} from "../../../features/profileSlice";

export const ProfileEditModal = () => {
  const [updateToBeUserName, setUpdateToBeUserName] = useState("");
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.login);
  return (
    <div className=" edit-profile-box background-btn-1 flex flex-col justify-between rounded-lg z-40 text-brand-secondaryText w-80 h-40 md:w-96 md:h-60  absolute left-0 top-12 md:top-16 md:left-96  bg-gray-500">
      <div
        className="absolute top-1 right-1 text-3xl cursor-pointer"
        onClick={() => dispatch(EditProfileButtonPressed())}
      >
        <AiFillCloseCircle />
      </div>

      <div className="edit-username-div w-full h-1/2  grid place-items-center font-medium text-lg">
        <label>
          User Name
          <input
            onChange={(e) => setUpdateToBeUserName(e.target.value)}
            className="ml-4 px-4 rounded-2xl bg-transparent border-brand-secondaryBorder border"
          />
        </label>
      </div>
      <div className="w-full h-1/2 grid place-items-center ">
        <button
          disabled={!updateToBeUserName}
          className="edit-username-btn background-btn-1 px-6 py-2 rounded-md  border-brand-secondaryBorder border"
          onClick={() => {
            dispatch(updateUserInfo({ token, updateToBeUserName }));
            dispatch(EditProfileButtonPressed());
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
};
