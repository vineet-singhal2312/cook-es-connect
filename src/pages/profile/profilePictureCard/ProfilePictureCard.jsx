import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { GrEdit } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { uploadTimeLinePhoto } from "../../../utils/Profile.utiles";
import { ProfileEditModal } from "./ProfileEditModal";
import { EditProfileButtonPressed } from "../../../features/profileSlice";

export const ProfilePictureCard = ({ profileData }) => {
  const { isEditProfile } = useSelector((state) => state.profile);
  const [selectedImage, setSelectedImage] = useState("");
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.login);

  return (
    <>
      <div className="profile-picture-card background-0 rounded-lg w-full h-400px relative flex flex-col justify-between">
        {isEditProfile && <ProfileEditModal />}

        <img
          src={profileData.timeLinePhoto}
          alt="Girl in a jacket"
          className="timeline-photo w-full h-3/5 rounded-t border-b"
        />

        <img
          alt="Remy Sharp"
          src={profileData.profilePictureImageUrl}
          className="profile-avtar  absolute top-52 left-4 md:top-40 md:left-16 md:w-40 md:h-40 w-24 h-24 rounded-full"
        />
        <div className="h-1/5 md:p-4 relative flex items-center justify-between">
          <h1 className="user-name-profile grid place-items-center absolute -top-8 md:relative md:-top-1 md:left-0 left-28 md:ml-8 text-sm font-semibold md:text-2xl md:w-1/4 capitalize">
            {profileData.userName}
          </h1>
          {selectedImage ? (
            <label
              className="fileContainer flex absolute cursor-pointer bottom-32 right-2 w-1/10 md:bottom-24 md:right-4 md:p-8"
              onClick={() =>
                uploadTimeLinePhoto(
                  token,
                  selectedImage,
                  setSelectedImage,
                  dispatch
                )
              }
            >
              <div className="flex justify-center items-center md:mr-4">
                <TiTick />
              </div>
              <p className="hidden md:block">Click for upload</p>
            </label>
          ) : (
            <label className="fileContainer flex absolute cursor-pointer bottom-32 right-2 w-1/10 md:bottom-24 md:right-4 md:p-8">
              <div className="flex justify-center items-center md:mr-4">
                <GrEdit />
              </div>
              <p className="hidden md:block">Timeline</p>

              <input
                className="post-image w-1/10"
                type="file"
                onChange={(e) => setSelectedImage(e.target.files[0])}
              />
            </label>
          )}

          <div className="w-full  md:w-4/5 h-4/5 md:font-semibold flex justify-center items-center md:justify-between mx-2 my-4 md:m-0">
            <div className="follower-following-div flex w-3/4 md:w-1/2  ">
              <div className="follower w-1/2 0  md:grid md:place-items-center">
                {" "}
                {profileData.followers?.length} follower
              </div>
              <div className="following w-1/2   md:grid md:place-items-center">
                {profileData.following?.length} following
              </div>
            </div>

            <button
              className="hidden  edit-profile-btn bg-button-gradient text-sm md:text-base h-full md:grid place-items-center rounded-lg md:w-1/5 w-1/4 "
              onClick={() => dispatch(EditProfileButtonPressed())}
            >
              Edit profile
            </button>
            <button
              className="md:hidden edit-profile-btn absolute -top-8 left-48 bg-button-gradient text-sm md:text-base h-6 grid place-items-center rounded-full  w-6 "
              onClick={() => dispatch(EditProfileButtonPressed())}
            >
              <GrEdit />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
