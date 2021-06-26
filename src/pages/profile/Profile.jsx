import React, { useEffect, useState } from "react";
import { BottomNav } from "../../components/bottomNav/BottomNav";
import { Header } from "../../components/header/Header";
import { ProfileInfo } from "../../components/profileInfo/ProfileInfo";
import { ProfilePictureCard } from "./profilePictureCard/ProfilePictureCard";
import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "../../components/PostCard/PostCard";
import { fetchPosts } from "../../features/postsSlice";
import {
  fetchProfileData,
  getPostsForProfile,
} from "../../features/profileSlice";
export const Profile = () => {
  const { token, currentUserId } = useSelector((state) => state.login);
  // const searchedUserProfile = useSelector((state) => state.searchedUserProfile);

  // const [wantedDataForUserId, setwantedDataForUserId] = useState(currentUserId);
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const { status, profileData, posts } = useSelector((state) => state.profile);
  // console.log(wantedDataForUserId);
  // console.log(searchedUserProfile.status);
  useEffect(async () => {
    console.log("pehle ye");
    if (status === "idle") {
      await dispatch(fetchProfileData(token));
      await dispatch(getPostsForProfile(token));
    }
  }, [dispatch, status, post.status]);
  return (
    <>
      {/* // <div className="w-full min-h-screen"> */}
      <Header />
      <BottomNav />
      <div className="profile sm:container md:mx-auto md:px-20  h-screen flex flex-col items-center">
        <div className="profile-content flex flex-col mt-12  items-center  pt-4 h-full w-full overflow-x-auto">
          <div className="flex justify-center w90">
            <ProfilePictureCard profileData={profileData} />
          </div>
          {/* <ProfileInfo /> */}

          <div className="grid place-items-center mt-2 w-full mb-32">
            {posts.map((post) => (
              <PostCard post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
