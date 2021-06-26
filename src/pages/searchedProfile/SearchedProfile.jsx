import React, { useEffect, useState } from "react";
import { BottomNav } from "../../components/bottomNav/BottomNav";
import { Header } from "../../components/header/Header";
import { ProfileInfo } from "../../components/profileInfo/ProfileInfo";
import { ProfilePictureCard } from "../../components/profilePictureCard/ProfilePictureCard";
import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "../../components/PostCard/PostCard";
import { fetchPosts } from "../../features/postsSlice";
import { useParams } from "react-router-dom";

import {
  fetchProfileData,
  getPostsForProfile,
} from "../../features/profileSlice";
import {
  fetchSearchedUserProfileData,
  fetchUserProfileData,
  getPostsOfSearchedUser,
} from "../../features/searchedProfileSlice";
import { SearchedUserProfilePictureCard } from "./SearchedUserProfilePictureCard";
export const SearchedProfile = () => {
  const { token } = useSelector((state) => state.login);
  const { searchedUserId } = useParams();
  console.log(searchedUserId);
  const dispatch = useDispatch();

  const { status, searchedUserProfileData, searchedUserPosts } = useSelector(
    (state) => state.searchedUserProfile
  );
  useEffect(async () => {
    console.log("pehle ye");
    // if (status === "idle") {
    await dispatch(fetchSearchedUserProfileData({ token, searchedUserId }));
    await dispatch(getPostsOfSearchedUser({ token, searchedUserId }));
    // }
  }, [dispatch, searchedUserId]);
  console.log(searchedUserProfileData);
  return (
    <>
      {/* // <div className="w-full min-h-screen"> */}
      <Header />
      <BottomNav />
      <div className="profile sm:container md:mx-auto md:px-20  h-screen flex flex-col items-center">
        <div className="profile-content flex flex-col md:w-4/5 w-full  mt-12 items-center  pt-4  overflow-x-auto">
          <SearchedUserProfilePictureCard
            profileData={searchedUserProfileData}
          />

          {/* <ProfileInfo /> */}

          <div className="grid place-items-center mt-2 w-full mb-32">
            {searchedUserPosts.map((post) => (
              <PostCard post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
