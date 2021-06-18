import React, { useEffect } from "react";
import { BottomNav } from "../../components/bottomNav/BottomNav";
import { Header } from "../../components/header/Header";
import { ProfileInfo } from "../../components/profileInfo/ProfileInfo";
import { ProfilePictureCard } from "../../components/profilePictureCard/ProfilePictureCard";
import { useDispatch, useSelector } from "react-redux";
import { FeedCard } from "../../components/feedCard/FeedCard";
import { fetchPosts } from "../../features/postsSlice";
export const Profile = () => {
  const { token } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const { posts, status, error } = useSelector((state) => state.post);

  useEffect(() => {
    console.log("pehle ye");
    if (status === "idle") {
      dispatch(fetchPosts(token));
    }
  }, [dispatch, status]);
  return (
    <>
      {/* // <div className="w-full min-h-screen"> */}
      <Header />
      <BottomNav />
      <div className="profile sm:container md:mx-auto md:px-20  h-screen flex">
        <div className="profile-content flex flex-col   my-12 items-center  pt-4  w-full overflow-x-auto">
          {posts.map((post) => (
            <ProfilePictureCard post={post} />
          ))}
          <ProfileInfo />
        </div>
      </div>
    </>
  );
};
