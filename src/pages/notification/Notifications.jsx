import React, { useEffect } from "react";
import { BottomNav } from "../../components/bottomNav/BottomNav";
import { Header } from "../../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getNotifications } from "../../features/notificationSlice";

import { ProfileInfo } from "../../components/profileInfo/ProfileInfo";
import { ProfilePictureCard } from "../profile/profilePictureCard/ProfilePictureCard";
// import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "../../components/PostCard/PostCard";
import { fetchPosts } from "../../features/postsSlice";
import {
  fetchProfileData,
  getPostsForProfile,
} from "../../features/profileSlice";
import { NotificationCard } from "./NotificationCard";
export const Notifications = () => {
  const { status, notifications } = useSelector((state) => state.notification);
  //   const { status, profileData, posts } = useSelector((state) => state.profile);
  //   const post = useSelector((state) => state.post);

  const { token } = useSelector((state) => state.login);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("pehle ye");
    if (status === "idle") {
      dispatch(getNotifications(token));
    }
  }, [dispatch, status]);

  //   useEffect(async () => {
  //     console.log("pehle ye");
  //     if (status === "idle") {
  //       await dispatch(fetchProfileData(token));
  //       await dispatch(getPostsForProfile(token));
  //     }
  //   }, [dispatch, status, post.status]);
  return (
    <>
      <Header />
      <BottomNav />
      <div className="notification sm:container md:mx-auto md:px-20  h-screen flex flex-col items-center">
        <div className="notification scrollbar-hidden flex flex-col md:w-4/5 w-full  mt-12 items-center  pt-4  overflow-x-auto">
          {/* <ProfilePictureCard profileData={profileData} /> */}

          {/* <ProfileInfo /> */}
          <h1 className="text-3xl font-bold">Notifications</h1>

          <div className="grid place-items-center mt-4 w-full mb-32">
            {notifications.map((notification) => (
              <NotificationCard notification={notification} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
