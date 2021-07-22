import React, { useEffect } from "react";
import { BottomNav } from "../../components/bottomNav/BottomNav";
import { Header } from "../../components/header/Header";
import { ProfilePictureCard } from "./profilePictureCard/ProfilePictureCard";
import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "../../components/PostCard/PostCard";
import {
  fetchProfileData,
  getPostsForProfile,
} from "../../features/profileSlice";
import { Loader } from "../../components/loader/Loader";
import { PostCommentBox } from "../../components/PostCard/PostCommentbox";
export const Profile = () => {
  const { token } = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const { status, profileData, posts } = useSelector((state) => state.profile);

  useEffect(() => {
    async function fetchData() {
      if (status === "idle") {
        await dispatch(fetchProfileData(token));
        await dispatch(getPostsForProfile(token));
      }
    }
    fetchData();
  }, [dispatch, status, post.status, token]);
  return (
    <>
      <Header />
      <BottomNav />
      {(status === "loading" || post.status === "loading") && <Loader />}
      {post.isCommentBox && <PostCommentBox />}
      <div className="profile sm:container md:mx-auto md:px-20  h-screen flex flex-col items-center">
        <div className="profile-content flex flex-col mt-12  items-center  pt-4 h-full w-full overflow-x-auto scrollbar-hidden ">
          <div className="flex justify-center w90">
            <ProfilePictureCard profileData={profileData} />
          </div>

          <div className="grid place-items-center mt-2 w-full mb-32">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
