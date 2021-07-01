import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchSearchedUserProfileData,
  followProfile,
  UnFollowProfile,
} from "../../features/searchedProfileSlice";
import { fetchProfileData } from "../../features/profileSlice";
export const SearchedUserProfilePictureCard = ({ profileData }) => {
  const dispatch = useDispatch();
  const { token, currentUserId } = useSelector((state) => state.login);
  const searchedUserId = profileData._id;
  const isFollow = profileData.followers?.includes(currentUserId);

  return (
    <>
      <div className="searched-profile-picture-card background-0 rounded-lg w-full h-400px  relative flex flex-col justify-between">
        <img
          src={profileData.timeLinePhoto}
          alt="Girl in a jacket"
          className="timeline-photo w-full h-3/5 rounded-t border-b"
        />

        <img
          alt="Remy Sharp"
          src={profileData.profilePictureImageUrl}
          className="searched-profile-avtar  absolute top-52 left-4 md:top-40 md:left-16 md:w-40 md:h-40 w-24 h-24 rounded-full"
        />

        <div className="h-1/5 md:p-4 relative flex items-center justify-between">
          <h1 className="user-name-profile grid place-items-center absolute -top-8 md:relative md:-top-1 md:left-0 left-28 md:ml-8 text-sm font-semibold md:text-2xl md:w-1/4 capitalize">
            {profileData.userName}
          </h1>

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
            {isFollow ? (
              <button
                className="follow-btn bg-button-gradient h-4/5 md:h-full grid place-items-center rounded-lg md:w-1/5 w-1/3 "
                onClick={async () => {
                  await dispatch(UnFollowProfile({ token, searchedUserId }));
                  await dispatch(
                    fetchSearchedUserProfileData({ token, searchedUserId })
                  );
                  await dispatch(fetchProfileData(token));
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                className="follow-btn bg-button-gradient h-4/5 md:h-full grid place-items-center rounded-lg md:w-1/5 w-1/3 "
                onClick={async () => {
                  await dispatch(followProfile({ token, searchedUserId }));
                  await dispatch(fetchProfileData(token));
                }}
              >
                follow
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
