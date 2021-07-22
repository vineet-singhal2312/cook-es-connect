import React, { useEffect } from "react";
import { BottomNav } from "../../components/bottomNav/BottomNav";
import { Header } from "../../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "../../components/PostCard/PostCard";
import { useParams } from "react-router-dom";

import {
  fetchSearchedUserProfileData,
  getPostsOfSearchedUser,
} from "../../features/searchedProfileSlice";
import { SearchedUserProfilePictureCard } from "./SearchedUserProfilePictureCard";
import { Loader } from "../../components/loader/Loader";
import { PostCommentBox } from "../../components/PostCard/PostCommentbox";
export const SearchedProfile = () => {
  const { token } = useSelector((state) => state.login);
  const { searchedUserId } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  const { status, searchedUserProfileData, searchedUserPosts } = useSelector(
    (state) => state.searchedUserProfile
  );

  useEffect(() => {
    async function fetchData() {
      if (status === "idle") {
        await dispatch(fetchSearchedUserProfileData({ token, searchedUserId }));
        await dispatch(getPostsOfSearchedUser({ token, searchedUserId }));
      }
    }
    fetchData();
  }, [dispatch, searchedUserId, status, token]);
  return (
    <>
      <Header />
      <BottomNav />
      {(status === "loading" || post.status === "loading") && <Loader />}
      {post.isCommentBox && <PostCommentBox />}
      <div className="profile sm:container md:mx-auto md:px-20  h-screen flex flex-col items-center">
        <div className="profile-content flex flex-col  w-full  mt-12 items-center  pt-4  overflow-x-auto scrollbar-hidden">
          <div className="flex justify-center w90">
            <SearchedUserProfilePictureCard
              profileData={searchedUserProfileData}
            />
          </div>

          <div className="grid place-items-center mt-2 w-full mb-32">
            {searchedUserPosts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
